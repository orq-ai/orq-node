# OrqAdvisorTool

Lets the primary model consult a configured secondary model for advice.

## Example Usage

```typescript
import { OrqAdvisorTool } from "@orq-ai/node/models/components";

let value: OrqAdvisorTool = {
  model: "XC90",
  type: "orq:advisor",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `maxTokens`                                                                                                        | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | Maximum secondary-model output tokens. 0 uses the provider default; the selected model may impose a lower maximum. |
| `maxTranscriptTokens`                                                                                              | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | Maximum estimated conversation-transcript tokens sent to the secondary model. 0 includes the full transcript.      |
| `maxUses`                                                                                                          | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | Maximum invocations per request. 0 means unlimited.                                                                |
| `model`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Secondary model in provider/model format.                                                                          |
| `reasoningEffort`                                                                                                  | [components.ReasoningEffort](../../models/components/reasoningeffort.md)                                           | :heavy_minus_sign:                                                                                                 | Reasoning effort for supported models. Omit to use the provider default.                                           |
| `temperature`                                                                                                      | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | Sampling temperature. The selected model may impose a lower maximum.                                               |
| `type`                                                                                                             | *"orq:advisor"*                                                                                                    | :heavy_check_mark:                                                                                                 | Advisor tool discriminator.                                                                                        |