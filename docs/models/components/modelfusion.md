# ModelFusion

## Example Usage

```typescript
import { ModelFusion } from "@orq-ai/node/models/components";

let value: ModelFusion = {
  modelFusionId: "<id>",
  key: "<key>",
  modelRef: "<value>",
  panelModels: [
    "<value 1>",
  ],
  judgeModel: "<value>",
  synthesisMode: "MODEL_FUSION_SYNTHESIS_MODE_UNSPECIFIED",
  preset: "MODEL_FUSION_PRESET_QUALITY",
  webTools: false,
  maxToolCalls: 135744,
  feedRawToSynth: false,
  enabled: false,
  createdAt: new Date("2026-08-20T14:20:35.387Z"),
  updatedAt: new Date("2025-05-16T13:03:33.829Z"),
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `modelFusionId`                                                                                         | *string*                                                                                                | :heavy_check_mark:                                                                                      | Unique Model Fusion identifier assigned by ORQ.                                                         |
| `key`                                                                                                   | *string*                                                                                                | :heavy_check_mark:                                                                                      | Stable lowercase key used in the gateway model reference.                                               |
| `modelRef`                                                                                              | *string*                                                                                                | :heavy_check_mark:                                                                                      | Workspace-qualified gateway model reference.                                                            |
| `panelModels`                                                                                           | *string*[]                                                                                              | :heavy_check_mark:                                                                                      | Distinct model references evaluated independently.                                                      |
| `judgeModel`                                                                                            | *string*                                                                                                | :heavy_check_mark:                                                                                      | Model reference used to judge anonymized panel answers.                                                 |
| `synthesisMode`                                                                                         | [components.ModelFusionSynthesisMode](../../models/components/modelfusionsynthesismode.md)              | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `preset`                                                                                                | [components.ModelFusionPreset](../../models/components/modelfusionpreset.md)                            | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `orchestratorModel`                                                                                     | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Required only for analysis mode; omitted when the judge writes the final answer.                        |
| `webTools`                                                                                              | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | Whether the Fusion-managed ORQ web tools are available to panel and judge phases.                       |
| `maxToolCalls`                                                                                          | *number*                                                                                                | :heavy_check_mark:                                                                                      | Maximum Fusion-managed web tool calls per participating phase. Zero disables Fusion-managed tool calls. |
| `feedRawToSynth`                                                                                        | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | Whether raw panel candidate answers are included in synthesis input.                                    |
| `enabled`                                                                                               | *boolean*                                                                                               | :heavy_check_mark:                                                                                      | Whether the Fusion is available to gateway requests.                                                    |
| `createdAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `updatedAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)           | :heavy_check_mark:                                                                                      | N/A                                                                                                     |