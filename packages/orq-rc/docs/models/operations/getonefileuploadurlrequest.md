# GetOneFileUploadUrlRequest

## Example Usage

```typescript
import { GetOneFileUploadUrlRequest } from "@orq-ai/node/models/operations";

let value: GetOneFileUploadUrlRequest = {
  knowledgeId: "<id>",
  fileName: "example.file",
  contentType: "<value>",
  datasourceId: "<id>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `knowledgeId`                               | *string*                                    | :heavy_check_mark:                          | The unique identifier of the knowledge base |
| `fileName`                                  | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `contentType`                               | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `datasourceId`                              | *string*                                    | :heavy_check_mark:                          | N/A                                         |