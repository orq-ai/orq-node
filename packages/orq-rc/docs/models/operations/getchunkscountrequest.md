# GetChunksCountRequest

## Example Usage

```typescript
import { GetChunksCountRequest } from "@orq-ai/node/models/operations";

let value: GetChunksCountRequest = {
  knowledgeId: "<id>",
  datasourceId: "<id>",
  chunksServiceCountRequest: {},
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `knowledgeId`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `datasourceId`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `chunksServiceCountRequest`                                                                  | [components.ChunksServiceCountRequest](../../models/components/chunksservicecountrequest.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |