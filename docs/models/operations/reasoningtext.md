# ReasoningText

A piece of reasoning text on a replayed reasoning item.

## Example Usage

```typescript
import { ReasoningText } from "@orq-ai/node/models/operations";

let value: ReasoningText = {
  text: "<value>",
  type: "reasoning_text",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `text`              | *string*            | :heavy_check_mark:  | The reasoning text. |
| `type`              | *"reasoning_text"*  | :heavy_check_mark:  | N/A                 |