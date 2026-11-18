# ResponseOutputReasoningSummary

A piece of the reasoning summary.

## Example Usage

```typescript
import { ResponseOutputReasoningSummary } from "@orq-ai/node/models/components";

let value: ResponseOutputReasoningSummary = {
  text: "<value>",
  type: "summary_text",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `text`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The text.                                                                                                      |
| `type`                                                                                                         | [components.ResponseOutputReasoningSummaryType](../../models/components/responseoutputreasoningsummarytype.md) | :heavy_check_mark:                                                                                             | The part type.                                                                                                 |
| `additionalProperties`                                                                                         | Record<string, *any*>                                                                                          | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |