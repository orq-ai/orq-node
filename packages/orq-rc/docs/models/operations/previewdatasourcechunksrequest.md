# PreviewDatasourceChunksRequest

## Example Usage

```typescript
import { PreviewDatasourceChunksRequest } from "@orq-ai/node/models/operations";

let value: PreviewDatasourceChunksRequest = {
  knowledgeId: "<id>",
  datasourcesServicePreviewChunksRequest: {
    fileId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `knowledgeId`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `datasourcesServicePreviewChunksRequest`                                                                               | [components.DatasourcesServicePreviewChunksRequest](../../models/components/datasourcesservicepreviewchunksrequest.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |