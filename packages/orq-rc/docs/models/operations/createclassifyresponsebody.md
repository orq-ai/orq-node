# CreateClassifyResponseBody

Returns one answer per question.

## Example Usage

```typescript
import { CreateClassifyResponseBody } from "@orq-ai/node/models/operations";

let value: CreateClassifyResponseBody = {
  answers: {
    "key": {
      score: 8762.99,
      type: "score",
    },
  },
  model: "XC90",
  usage: {
    inputTokens: 938729,
    outputTokens: 809892,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `answers`                                                                    | Record<string, *components.ClassifyAnswer*>                                  | :heavy_check_mark:                                                           | Answers keyed by the question identifiers from the request.                  |
| `model`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | The requested ID of the model that answered. This can be a fallback model.   |
| `telemetry`                                                                  | [components.ResponseTelemetry](../../models/components/responsetelemetry.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `usage`                                                                      | [components.ClassifyUsage](../../models/components/classifyusage.md)         | :heavy_check_mark:                                                           | N/A                                                                          |