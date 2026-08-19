# UpdateChunkEnabledRequest

## Example Usage

```typescript
import { UpdateChunkEnabledRequest } from "@orq-ai/node/models/operations";

let value: UpdateChunkEnabledRequest = {
  knowledgeId: "<id>",
  datasourceId: "<id>",
  chunkId: "<id>",
  chunksServiceSetEnabledRequest: {
    enabled: true,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `knowledgeId`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `datasourceId`                                                                                         | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `chunkId`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `chunksServiceSetEnabledRequest`                                                                       | [components.ChunksServiceSetEnabledRequest](../../models/components/chunksservicesetenabledrequest.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |