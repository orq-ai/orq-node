# CreateModelFusionRequest

## Example Usage

```typescript
import { CreateModelFusionRequest } from "@orq-ai/node/models/components";

let value: CreateModelFusionRequest = {
  key: "<key>",
  panelModels: [
    "<value 1>",
  ],
  judgeModel: "<value>",
  synthesisMode: "MODEL_FUSION_SYNTHESIS_MODE_UNSPECIFIED",
  preset: "MODEL_FUSION_PRESET_UNSPECIFIED",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `key`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | Required. Stable lowercase key containing letters, numbers, and hyphens.                       |
| `panelModels`                                                                                  | *string*[]                                                                                     | :heavy_check_mark:                                                                             | Required. One to eight distinct chat/text model references in provider/model format.           |
| `judgeModel`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | Required. Model reference used for strict structured judge output.                             |
| `synthesisMode`                                                                                | [components.ModelFusionSynthesisMode](../../models/components/modelfusionsynthesismode.md)     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `preset`                                                                                       | [components.ModelFusionPreset](../../models/components/modelfusionpreset.md)                   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `orchestratorModel`                                                                            | *string*                                                                                       | :heavy_minus_sign:                                                                             | Required for analysis mode and invalid for judge_writes_final mode.                            |
| `webTools`                                                                                     | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Optional. Defaults to true.                                                                    |
| `maxToolCalls`                                                                                 | *number*                                                                                       | :heavy_minus_sign:                                                                             | Optional. Defaults to 8 and must be between 0 and 20. Zero disables Fusion-managed tool calls. |
| `feedRawToSynth`                                                                               | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Optional. Defaults to true.                                                                    |