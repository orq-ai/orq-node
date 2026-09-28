# ModelFusionUpdateRequest

## Example Usage

```typescript
import { ModelFusionUpdateRequest } from "@orq-ai/node/models/operations";

let value: ModelFusionUpdateRequest = {
  modelFusionId: "<id>",
  updateModelFusionRequest: {
    panelModels: [
      "<value 1>",
    ],
    judgeModel: "<value>",
    synthesisMode: "MODEL_FUSION_SYNTHESIS_MODE_ANALYSIS",
    preset: "MODEL_FUSION_PRESET_SAFETY",
    webTools: false,
    maxToolCalls: 669668,
    feedRawToSynth: true,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `modelFusionId`                                                                            | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `updateModelFusionRequest`                                                                 | [components.UpdateModelFusionRequest](../../models/components/updatemodelfusionrequest.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |