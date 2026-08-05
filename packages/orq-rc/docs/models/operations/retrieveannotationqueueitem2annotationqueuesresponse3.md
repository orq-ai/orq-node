# RetrieveAnnotationQueueItem2AnnotationQueuesResponse3

## Example Usage

```typescript
import { RetrieveAnnotationQueueItem2AnnotationQueuesResponse3 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItem2AnnotationQueuesResponse3 = {
  type: "file",
  file: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | *"file"*                                                                                                   | :heavy_check_mark:                                                                                         | The type of the content part. Always `file`.                                                               |
| `file`                                                                                                     | [operations.RetrieveAnnotationQueueItem2File](../../models/operations/retrieveannotationqueueitem2file.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |