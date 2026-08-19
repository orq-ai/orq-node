# DeleteChunksRequest

## Example Usage

```typescript
import { DeleteChunksRequest } from "@orq-ai/node/models/operations";

let value: DeleteChunksRequest = {
  knowledgeId: "<id>",
  datasourceId: "<id>",
  chunksServiceDeleteManyRequest: {
    chunkIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `knowledgeId`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `datasourceId`                                                                                         | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `chunksServiceDeleteManyRequest`                                                                       | [components.ChunksServiceDeleteManyRequest](../../models/components/chunksservicedeletemanyrequest.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |