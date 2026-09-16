# ModelConfigurationFallbacks

## Example Usage

```typescript
import { ModelConfigurationFallbacks } from "@orq-ai/node/models/operations";

let value: ModelConfigurationFallbacks = {
  model: "openai/gpt-5.4-mini",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `model`                   | *string*                  | :heavy_check_mark:        | Fallback model identifier | openai/gpt-5.4-mini       |