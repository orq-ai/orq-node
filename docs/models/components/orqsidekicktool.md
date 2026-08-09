# OrqSidekickTool

Lets the primary model delegate a concrete task to a configured secondary model.

## Example Usage

```typescript
import { OrqSidekickTool } from "@orq-ai/node/models/components";

let value: OrqSidekickTool = {
  model: "Challenger",
  type: "orq:sidekick",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `maxTokens`                                                                                                        | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | Maximum secondary-model output tokens. 0 uses the provider default; the selected model may impose a lower maximum. |
| `maxUses`                                                                                                          | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | Maximum invocations per request. 0 means unlimited.                                                                |
| `model`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | Secondary model in provider/model format.                                                                          |
| `outputFormat`                                                                                                     | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Optional output-format guidance for the secondary model.                                                           |
| `reasoningEffort`                                                                                                  | [components.OrqSidekickToolReasoningEffort](../../models/components/orqsidekicktoolreasoningeffort.md)             | :heavy_minus_sign:                                                                                                 | Reasoning effort for supported models. Omit to use the provider default.                                           |
| `systemPrompt`                                                                                                     | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | Optional system prompt for the secondary model.                                                                    |
| `temperature`                                                                                                      | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | Sampling temperature. The selected model may impose a lower maximum.                                               |
| `type`                                                                                                             | *"orq:sidekick"*                                                                                                   | :heavy_check_mark:                                                                                                 | Sidekick tool discriminator.                                                                                       |