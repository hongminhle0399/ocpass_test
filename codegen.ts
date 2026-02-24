import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  documents: ["./src/**/*.tsx", "./src/**/*.ts" ],
  schema: ["./src/graphql/schema.graphql"],
  generates: {
    "./src/graphql/__generated__/": {
      plugins: ["typescript", "typescript-operations"],
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
      config: {
        useTypeImports: true,
      }
    },
  },
};

export default config;
