# UpdateAgentModelConfigurationFallbacks

## Example Usage

```typescript
import { UpdateAgentModelConfigurationFallbacks } from "@orq-ai/node/models/operations";

let value: UpdateAgentModelConfigurationFallbacks = {
  model: "openai/gpt-4o-mini",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `model`                   | *string*                  | :heavy_check_mark:        | Fallback model identifier | openai/gpt-4o-mini        |