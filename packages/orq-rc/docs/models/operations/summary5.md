# Summary5

Reasoning text from the model.

## Example Usage

```typescript
import { Summary5 } from "@orq-ai/node/models/operations";

let value: Summary5 = {
  text: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                                 | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryAnnotationQueueResponse200Type](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidsummaryannotationqueueresponse200type.md) | :heavy_minus_sign:                                                                                                                                                                                                     | The type of the reasoning text. Always `reasoning_text`.                                                                                                                                                               |
| `text`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                     | The reasoning text from the model.                                                                                                                                                                                     |