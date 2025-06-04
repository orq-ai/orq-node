# ListChunksData

## Example Usage

```typescript
import { ListChunksData } from "@orq-ai/node/models/operations";

let value: ListChunksData = {
  id: "<id>",
  text: "<value>",
  enabled: false,
  status: "pending",
  created: "<value>",
  updated: "<value>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_check_mark:                                                            | The unique identifier of the chunk                                            |
| `text`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | The text content of the chunk                                                 |
| `metadata`                                                                    | Record<string, *operations.ListChunksMetadata*>                               | :heavy_minus_sign:                                                            | Metadata of the chunk. Can include `page_number` or any other key-value pairs |
| `enabled`                                                                     | *boolean*                                                                     | :heavy_check_mark:                                                            | Whether the chunk is enabled                                                  |
| `status`                                                                      | [operations.ListChunksStatus](../../models/operations/listchunksstatus.md)    | :heavy_check_mark:                                                            | The status of the chunk                                                       |
| `created`                                                                     | *string*                                                                      | :heavy_check_mark:                                                            | The date and time the chunk was created                                       |
| `updated`                                                                     | *string*                                                                      | :heavy_check_mark:                                                            | The date and time the chunk was updated                                       |
| `createdById`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The unique identifier of the user who created the chunk                       |
| `updateById`                                                                  | *string*                                                                      | :heavy_minus_sign:                                                            | The unique identifier of the user who updated the chunk                       |