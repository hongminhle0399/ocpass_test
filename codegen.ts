import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  documents: ["./src/**/*.tsx", "./src/**/*.ts" ],
  schema: ["./src/graphql/schema.graphql"],
  generates: {
    "./src/graphql/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
        fragmentMasking: false
      },
      config: {
        useTypeImports: true,
      }
    },
  },
};

export default config;
