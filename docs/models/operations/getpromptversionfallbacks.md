# GetPromptVersionFallbacks

## Example Usage

```typescript
import { GetPromptVersionFallbacks } from "@orq-ai/node/models/operations";

let value: GetPromptVersionFallbacks = {
  model: "openai/gpt-4o-mini",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `model`                   | *string*                  | :heavy_check_mark:        | Fallback model identifier | openai/gpt-4o-mini        |