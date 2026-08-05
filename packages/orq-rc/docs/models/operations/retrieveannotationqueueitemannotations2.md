# RetrieveAnnotationQueueItemAnnotations2

A citation to a file

## Example Usage

```typescript
import { RetrieveAnnotationQueueItemAnnotations2 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItemAnnotations2 = {
  type: "file_citation",
  index: 1844.6,
  fileId: "<id>",
  filename: "example.file",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `type`                                           | *"file_citation"*                                | :heavy_check_mark:                               | N/A                                              |
| `index`                                          | *number*                                         | :heavy_check_mark:                               | The index in the text where the citation appears |
| `fileId`                                         | *string*                                         | :heavy_check_mark:                               | The ID of the file being cited                   |
| `filename`                                       | *string*                                         | :heavy_check_mark:                               | The name of the file being cited                 |