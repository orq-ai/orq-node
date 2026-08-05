# RetrieveAnnotationQueueItem11

## Example Usage

```typescript
import { RetrieveAnnotationQueueItem11 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItem11 = {
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                           | [operations.RetrieveAnnotationQueueItem1AnnotationQueuesResponse200Type](../../models/operations/retrieveannotationqueueitem1annotationqueuesresponse200type.md) | :heavy_minus_sign:                                                                                                                                               | The content type. Always `output_text`.                                                                                                                          |
| `text`                                                                                                                                                           | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | The text content.                                                                                                                                                |
| `annotations`                                                                                                                                                    | [operations.OneAnnotations](../../models/operations/oneannotations.md)[]                                                                                         | :heavy_minus_sign:                                                                                                                                               | Citations associated with the text content.                                                                                                                      |