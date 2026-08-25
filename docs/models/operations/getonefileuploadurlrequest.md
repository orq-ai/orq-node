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

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `knowledgeId`                                              | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `fileName`                                                 | *string*                                                   | :heavy_check_mark:                                         | The name of the file to upload.                            |
| `contentType`                                              | *string*                                                   | :heavy_check_mark:                                         | The media type of the file to upload.                      |
| `datasourceId`                                             | *string*                                                   | :heavy_check_mark:                                         | The datasource identifier that will own the uploaded file. |