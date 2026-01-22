# CreateSpeechFallbacks

## Example Usage

```typescript
import { CreateSpeechFallbacks } from "@orq-ai/node/models/operations";

let value: CreateSpeechFallbacks = {
  model: "openai/gpt-4o-mini",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `model`                   | *string*                  | :heavy_check_mark:        | Fallback model identifier | openai/gpt-4o-mini        |