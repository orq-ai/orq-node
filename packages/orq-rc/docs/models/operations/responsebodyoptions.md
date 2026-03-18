# ResponseBodyOptions

Model representing specific values and attributes of feedback.

## Example Usage

```typescript
import { ResponseBodyOptions } from "@orq-ai/node/models/operations";

let value: ResponseBodyOptions = {
  id: "<id>",
  value: "<value>",
  sentiment: "negative",
  description: "till huzzah cloudy what near orient willfully ski until",
  icon: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The id of the resource                                                               |
| `value`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | The value or content of the feedback.                                                |
| `sentiment`                                                                          | [operations.ResponseBodySentiment](../../models/operations/responsebodysentiment.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | Description of the feedback option.                                                  |
| `icon`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |