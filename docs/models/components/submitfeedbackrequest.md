# SubmitFeedbackRequest

## Example Usage

```typescript
import { SubmitFeedbackRequest } from "@orq-ai/node/models/components";

let value: SubmitFeedbackRequest = {
  message: "<value>",
  category: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `message`                                                                         | *string*                                                                          | :heavy_check_mark:                                                                | What happened, what was expected, and steps to reproduce. Do not include secrets. |
| `category`                                                                        | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `requestId`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `url`                                                                             | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |