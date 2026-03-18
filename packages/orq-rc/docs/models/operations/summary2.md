# Summary2

A text output from the model.

## Example Usage

```typescript
import { Summary2 } from "@orq-ai/node/models/operations";

let value: Summary2 = {
  text: "<value>",
  annotations: [],
  logprobs: [],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                             | [operations.GetV2AnnotationQueuesAnnotationQueueIdItemsItemIdSummaryType](../../models/operations/getv2annotationqueuesannotationqueueiditemsitemidsummarytype.md) | :heavy_minus_sign:                                                                                                                                                 | The type of the output text. Always `output_text`.                                                                                                                 |
| `text`                                                                                                                                                             | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The text output from the model.                                                                                                                                    |
| `annotations`                                                                                                                                                      | [operations.SummaryAnnotations](../../models/operations/summaryannotations.md)[]                                                                                   | :heavy_check_mark:                                                                                                                                                 | The annotations of the text output.                                                                                                                                |
| `logprobs`                                                                                                                                                         | [operations.SummaryLogprobs](../../models/operations/summarylogprobs.md)[]                                                                                         | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |