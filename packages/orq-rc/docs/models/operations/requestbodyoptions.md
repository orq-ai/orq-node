# RequestBodyOptions

Model representing specific values and attributes of feedback.

## Example Usage

```typescript
import { RequestBodyOptions } from "@orq-ai/node/models/operations";

let value: RequestBodyOptions = {
  value: "<value>",
  sentiment: "negative",
  description: "blah airbrush madly vice postbox",
  icon: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `value`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | The value or content of the feedback.                                              |
| `sentiment`                                                                        | [operations.RequestBodySentiment](../../models/operations/requestbodysentiment.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `description`                                                                      | *string*                                                                           | :heavy_check_mark:                                                                 | Description of the feedback option.                                                |
| `icon`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |