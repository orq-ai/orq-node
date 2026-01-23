# CreateTranscriptionFallbacks

## Example Usage

```typescript
import { CreateTranscriptionFallbacks } from "@orq-ai/node/models/operations";

let value: CreateTranscriptionFallbacks = {
  model: "openai/gpt-4o-mini",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `model`                   | *string*                  | :heavy_check_mark:        | Fallback model identifier | openai/gpt-4o-mini        |