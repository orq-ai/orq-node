# RetrieveAnnotationQueueItem12

## Example Usage

```typescript
import { RetrieveAnnotationQueueItem12 } from "@orq-ai/node/models/operations";

let value: RetrieveAnnotationQueueItem12 = {
  refusal: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                          | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                         | [operations.RetrieveAnnotationQueueItem1AnnotationQueuesResponse200ApplicationJSONType](../../models/operations/retrieveannotationqueueitem1annotationqueuesresponse200applicationjsontype.md) | :heavy_minus_sign:                                                                                                                                                                             | The content type. Always `refusal`.                                                                                                                                                            |
| `refusal`                                                                                                                                                                                      | *string*                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                             | The refusal text.                                                                                                                                                                              |