import { loadQuery } from "react-relay";
import type { Environment, PreloadedQuery } from "react-relay";
import type { GraphQLTaggedNode, OperationType } from "relay-runtime";

interface RegistryEntry<T extends OperationType> {
    queryRef: PreloadedQuery<T>;
    controller: AbortController;
}

export class PrefetchRegistry<T extends OperationType> {
    private registry = new Map<string, RegistryEntry<T>>();
    private accessQueue: string[] = [];
    private maxCacheSize: number;
    private query: GraphQLTaggedNode;

    constructor(query: GraphQLTaggedNode, maxCacheSize: number = 20) {
        this.query = query;
        this.maxCacheSize = maxCacheSize;
    }

    public getOrLoad(environment: Environment, id: string): PreloadedQuery<T> {
        // If already in registry, move to end of access queue
        if (this.registry.has(id)) {
            const index = this.accessQueue.indexOf(id);
            if (index > -1) this.accessQueue.splice(index, 1);
            this.accessQueue.push(id);
            return this.registry.get(id)!.queryRef;
        }

        // Load new query with AbortSignal in metadata
        const controller = new AbortController();
        const queryRef = loadQuery<T>(
            environment,
            this.query,
            { id },
            {
                networkCacheConfig: {
                    metadata: { signal: controller.signal }
                }
            }
        );

        // Evict oldest if limit reached
        if (this.accessQueue.length >= this.maxCacheSize) {
            const oldestId = this.accessQueue.shift();
            if (oldestId) {
                const entry = this.registry.get(oldestId);
                entry?.controller.abort();
                entry?.queryRef.dispose();
                this.registry.delete(oldestId);
            }
        }

        this.registry.set(id, { queryRef, controller });
        this.accessQueue.push(id);

        return queryRef;
    }
}
