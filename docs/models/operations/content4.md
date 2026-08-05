# Content4

A summary text from the model.

## Example Usage

```typescript
import { Content4 } from "@orq-ai/node/models/operations";

let value: Content4 = {
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                      | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                     | [operations.RetrieveAnnotationQueueItemContentAnnotationQueuesResponse200ApplicationJSONType](../../models/operations/retrieveannotationqueueitemcontentannotationqueuesresponse200applicationjsontype.md) | :heavy_minus_sign:                                                                                                                                                                                         | The type of the object. Always `summary_text`.                                                                                                                                                             |
| `text`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | A summary of the reasoning output from the model so far.                                                                                                                                                   |