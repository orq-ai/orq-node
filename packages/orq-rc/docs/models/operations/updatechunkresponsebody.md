# UpdateChunkResponseBody

Chunk successfully updated

## Example Usage

```typescript
import { UpdateChunkResponseBody } from "@orq-ai/node/models/operations";

let value: UpdateChunkResponseBody = {
  id: "<id>",
  text: "<value>",
  enabled: false,
  status: "processing",
  created: "<value>",
  updated: "<value>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The unique identifier of the chunk                                                                                       |
| `text`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The text content of the chunk                                                                                            |
| `metadata`                                                                                                               | Record<string, *string*>                                                                                                 | :heavy_minus_sign:                                                                                                       | Metadata of the chunk. Can include `page_number` or any other key-value pairs. Only values of type string are supported. |
| `enabled`                                                                                                                | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | Whether the chunk is enabled                                                                                             |
| `status`                                                                                                                 | [operations.UpdateChunkStatus](../../models/operations/updatechunkstatus.md)                                             | :heavy_check_mark:                                                                                                       | The status of the chunk                                                                                                  |
| `created`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The date and time the chunk was created                                                                                  |
| `updated`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The date and time the chunk was updated                                                                                  |
| `createdById`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The unique identifier of the user who created the chunk                                                                  |
| `updateById`                                                                                                             | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The unique identifier of the user who updated the chunk                                                                  |