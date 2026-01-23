# CreateRerankFallbacks

## Example Usage

```typescript
import { CreateRerankFallbacks } from "@orq-ai/node/models/operations";

let value: CreateRerankFallbacks = {
  model: "openai/gpt-4o-mini",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `model`                   | *string*                  | :heavy_check_mark:        | Fallback model identifier | openai/gpt-4o-mini        |