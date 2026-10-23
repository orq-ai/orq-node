# UpdateModelFusionResponse

## Example Usage

```typescript
import { UpdateModelFusionResponse } from "@orq-ai/node/models/components";

let value: UpdateModelFusionResponse = {
  modelFusion: {
    modelFusionId: "<id>",
    key: "<key>",
    modelRef: "<value>",
    panelModels: [
      "<value 1>",
    ],
    judgeModel: "<value>",
    synthesisMode: "MODEL_FUSION_SYNTHESIS_MODE_UNSPECIFIED",
    preset: "MODEL_FUSION_PRESET_SAFETY",
    webTools: false,
    maxToolCalls: 895151,
    feedRawToSynth: true,
    enabled: false,
    createdAt: new Date("2025-03-31T20:26:59.363Z"),
    updatedAt: new Date("2025-12-18T09:58:39.144Z"),
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `modelFusion`                                                    | [components.ModelFusion](../../models/components/modelfusion.md) | :heavy_check_mark:                                               | N/A                                                              |