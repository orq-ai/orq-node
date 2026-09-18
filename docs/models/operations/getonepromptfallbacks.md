# GetOnePromptFallbacks

## Example Usage

```typescript
import { GetOnePromptFallbacks } from "@orq-ai/node/models/operations";

let value: GetOnePromptFallbacks = {
  model: "openai/gpt-5.4-mini",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `model`                   | *string*                  | :heavy_check_mark:        | Fallback model identifier | openai/gpt-5.4-mini       |