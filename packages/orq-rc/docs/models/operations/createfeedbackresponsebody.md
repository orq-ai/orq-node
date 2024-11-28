# CreateFeedbackResponseBody

Successful operation

## Example Usage

```typescript
import { CreateFeedbackResponseBody } from "@orq-ai/node/models/operations";

let value: CreateFeedbackResponseBody = {
  property: "<value>",
  value: [
    "<value>",
  ],
  traceId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `property`                                                                                                                                            | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | A string describing the specific property or aspect rated.                                                                                            |
| `value`                                                                                                                                               | *operations.CreateFeedbackValue*                                                                                                                      | :heavy_check_mark:                                                                                                                                    | The feedback value. For single selection of multiple choice, the value should be an array of strings. For `correction`, the value should be a string. |
| `traceId`                                                                                                                                             | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | The id returned by the [`get_config`]() or [`invoke`](https://docs.orq.ai/reference/post_deployments-invoke-1) endpoints                              |
| `id`                                                                                                                                                  | *string*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |