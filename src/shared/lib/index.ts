import { useMatches } from "react-router";

interface RouteHandle {
  pageName?: string | Function;
}

export function usePageName(): string {
  const matches = useMatches();

  const match = [...matches]
    .reverse()
    .find((m) => (m.handle as RouteHandle)?.pageName);
  const handle = match?.handle as RouteHandle;

  if (typeof handle?.pageName === "function") {
    return handle.pageName(match?.params);
  }

  return handle?.pageName ?? "App";
}
