# GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson23Output

## Example Usage

```typescript
import {
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson23Output,
} from "@orq-ai/node/models/operations";

let value:
  GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyAnnotationQueueResponse200ApplicationJson23Output =
    {
      documents: [
        {
          id: "<id>",
          text: "<value>",
          metadata: {
            datasourceId: "<id>",
            chunkId: "<id>",
            fileName: "example.file",
            fileType: "audio",
          },
          score: 6364.07,
        },
      ],
    };
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `documents`                                                                                                                                                                              | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdResponseBodyDocuments](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidresponsebodydocuments.md)[] | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |