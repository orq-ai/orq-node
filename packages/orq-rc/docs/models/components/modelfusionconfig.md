# ModelFusionConfig

## Example Usage

```typescript
import { ModelFusionConfig } from "@orq-ai/node/models/components";

let value: ModelFusionConfig = {
  feedRawToSynth: false,
  judgeModel: "<value>",
  maxToolCalls: 578171,
  panelModels: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  preset: "<value>",
  synthesisMode: "<value>",
  webTools: false,
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `feedRawToSynth`    | *boolean*           | :heavy_check_mark:  | N/A                 |
| `id`                | *string*            | :heavy_minus_sign:  | N/A                 |
| `judgeModel`        | *string*            | :heavy_check_mark:  | N/A                 |
| `maxToolCalls`      | *number*            | :heavy_check_mark:  | N/A                 |
| `orchestratorModel` | *string*            | :heavy_minus_sign:  | N/A                 |
| `panelModels`       | *string*[]          | :heavy_check_mark:  | N/A                 |
| `preset`            | *string*            | :heavy_check_mark:  | N/A                 |
| `synthesisMode`     | *string*            | :heavy_check_mark:  | N/A                 |
| `webTools`          | *boolean*           | :heavy_check_mark:  | N/A                 |