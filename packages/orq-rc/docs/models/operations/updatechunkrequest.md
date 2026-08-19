# UpdateChunkRequest

## Example Usage

```typescript
import { UpdateChunkRequest } from "@orq-ai/node/models/operations";

let value: UpdateChunkRequest = {
  knowledgeId: "<id>",
  datasourceId: "<id>",
  chunkId: "<id>",
  chunksServiceUpdateRequest: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `knowledgeId`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `datasourceId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `chunkId`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `chunksServiceUpdateRequest`                                                                   | [components.ChunksServiceUpdateRequest](../../models/components/chunksserviceupdaterequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |