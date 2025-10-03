# GetChunksCountRequest

## Example Usage

```typescript
import { GetChunksCountRequest } from "@orq-ai/node/models/operations";

let value: GetChunksCountRequest = {
  knowledgeId: "<id>",
  datasourceId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `knowledgeId`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | The unique identifier of the knowledge base                                                  |
| `datasourceId`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | The unique identifier of the datasource.                                                     |
| `requestBody`                                                                                | [operations.GetChunksCountRequestBody](../../models/operations/getchunkscountrequestbody.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |