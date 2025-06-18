# CreateFeedbackRequestBody

Feedback submission payload

## Example Usage

```typescript
import { CreateFeedbackRequestBody } from "@orq-ai/node/models/operations";

let value: CreateFeedbackRequestBody = {
  field: "<value>",
  value: 1814.73,
  traceId: "<id>",
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `field`                                                                                                                                               | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | A string describing the specific property or aspect rated.                                                                                            |
| `value`                                                                                                                                               | *operations.Value*                                                                                                                                    | :heavy_check_mark:                                                                                                                                    | The feedback value. For single selection of multiple choice, the value should be an array of strings. For `correction`, the value should be a string. |
| `traceId`                                                                                                                                             | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | The id returned by the [`get_config`]() or [`invoke`](https://docs.orq.ai/reference/post_deployments-invoke-1) endpoints                              |