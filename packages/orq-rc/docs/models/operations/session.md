# Session

## Example Usage

```typescript
import { Session } from "@orq-ai/node/models/operations";

let value: Session = {
  model: "F-150",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `audio`                                                                                | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | OpenAI Live audio settings, including the output voice.                                |
| `delegation`                                                                           | [operations.Delegation](../../models/operations/delegation.md)                         | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `idleTimeoutS`                                                                         | *number*                                                                               | :heavy_minus_sign:                                                                     | Seconds of inactivity before inference returns to standby when speech wake is enabled. |
| `instructions`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | Instructions for the voice model.                                                      |
| `model`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | Gateway model ID, such as openai/gpt-live-1.1.                                         |
| `wakePolicy`                                                                           | [operations.WakePolicy](../../models/operations/wakepolicy.md)                         | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `additionalProperties`                                                                 | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |