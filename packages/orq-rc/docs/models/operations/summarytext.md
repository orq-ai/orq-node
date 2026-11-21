# SummaryText

A piece of reasoning summary text on a replayed reasoning item.

## Example Usage

```typescript
import { SummaryText } from "@orq-ai/node/models/operations";

let value: SummaryText = {
  text: "<value>",
  type: "summary_text",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `text`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | The reasoning summary text.                                                                          |
| `type`                                                                                               | [operations.CreateRouterResponseInputType](../../models/operations/createrouterresponseinputtype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |