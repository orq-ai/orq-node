# ListPromptVersionsFallbacks

## Example Usage

```typescript
import { ListPromptVersionsFallbacks } from "@orq-ai/node/models/operations";

let value: ListPromptVersionsFallbacks = {
  model: "openai/gpt-5.4-mini",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `model`                   | *string*                  | :heavy_check_mark:        | Fallback model identifier | openai/gpt-5.4-mini       |