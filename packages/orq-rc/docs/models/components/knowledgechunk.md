# KnowledgeChunk

## Example Usage

```typescript
import { KnowledgeChunk } from "@orq-ai/node/models/components";

let value: KnowledgeChunk = {
  text: "<value>",
  enabled: false,
  status: "completed",
  created: "<value>",
  updated: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `text`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `metadata`                                                                         | Record<string, *components.Metadata*>                                              | :heavy_minus_sign:                                                                 | Metadata of the chunk. Can include `page_number` or any other key-value pairs      |
| `enabled`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `status`                                                                           | [components.KnowledgeChunkStatus](../../models/components/knowledgechunkstatus.md) | :heavy_check_mark:                                                                 | The status of the chunk                                                            |
| `created`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updated`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `createdById`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | The unique identifier of the user who created the chunk                            |
| `updateById`                                                                       | *string*                                                                           | :heavy_minus_sign:                                                                 | The unique identifier of the user who updated the chunk                            |
| `processingAttempts`                                                               | [components.ProcessingAttempt](../../models/components/processingattempt.md)[]     | :heavy_minus_sign:                                                                 | Additive compatibility fields from the database document.                          |
| `countMetadata`                                                                    | [components.CountMetadata](../../models/components/countmetadata.md)               | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |