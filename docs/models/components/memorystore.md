# MemoryStore

## Example Usage

```typescript
import { MemoryStore } from "@orq-ai/node/models/components";

let value: MemoryStore = {
  key: "<key>",
  description:
    "gracefully deselect christen primary advanced along brr vacantly loosely out",
  created: "<value>",
  updated: "<value>",
  embeddingConfig: {
    model: "Mercielago",
  },
  id: "<id>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                        | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The unique key of the memory store. The key is unique and inmmutable and cannot be repeated within the same workspace.       |
| `description`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The description of the memory store. Be as precise as possible to help the AI to understand the purpose of the memory store. |
| `createdById`                                                                                                                | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The user ID of the creator                                                                                                   |
| `updatedById`                                                                                                                | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The user ID of the last updater                                                                                              |
| `created`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The creation date of the memory store                                                                                        |
| `updated`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The last update date of the memory store                                                                                     |
| `ttl`                                                                                                                        | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `embeddingConfig`                                                                                                            | [components.MemoryStoreEmbeddingConfig](../../models/components/memorystoreembeddingconfig.md)                               | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The unique identifier of the memory store                                                                                    |