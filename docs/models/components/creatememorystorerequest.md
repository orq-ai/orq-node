# CreateMemoryStoreRequest

## Example Usage

```typescript
import { CreateMemoryStoreRequest } from "@orq-ai/node/models/components";

let value: CreateMemoryStoreRequest = {
  key: "<key>",
  embeddingConfig: {
    model: "Mercielago",
  },
  description: "rear finally odd hmph replicate",
  path: "/etc/defaults",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                                                            | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The unique key of the memory store. The key is unique and inmmutable and cannot be repeated within the same workspace.                                           |
| `embeddingConfig`                                                                                                                                                | [components.MemoryStoreEmbeddingConfig](../../models/components/memorystoreembeddingconfig.md)                                                                   | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `description`                                                                                                                                                    | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `ttl`                                                                                                                                                            | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | N/A                                                                                                                                                              |
| `path`                                                                                                                                                           | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | Entity storage path. With workspace-level API keys, the first element identifies the project. With project-level API keys, the path is relative to that project. |