# UpdateModelFusionRequest

## Example Usage

```typescript
import { UpdateModelFusionRequest } from "@orq-ai/node/models/components";

let value: UpdateModelFusionRequest = {
  panelModels: [],
  judgeModel: "<value>",
  synthesisMode: "MODEL_FUSION_SYNTHESIS_MODE_ANALYSIS",
  preset: "MODEL_FUSION_PRESET_BUDGET",
  webTools: false,
  maxToolCalls: 757128,
  feedRawToSynth: true,
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `panelModels`                                                                              | *string*[]                                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `judgeModel`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `synthesisMode`                                                                            | [components.ModelFusionSynthesisMode](../../models/components/modelfusionsynthesismode.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `preset`                                                                                   | [components.ModelFusionPreset](../../models/components/modelfusionpreset.md)               | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `orchestratorModel`                                                                        | *string*                                                                                   | :heavy_minus_sign:                                                                         | Required for analysis mode and omitted for judge_writes_final mode.                        |
| `webTools`                                                                                 | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `maxToolCalls`                                                                             | *number*                                                                                   | :heavy_check_mark:                                                                         | Required. Must be between 0 and 20. Zero disables Fusion-managed tool calls.               |
| `feedRawToSynth`                                                                           | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |