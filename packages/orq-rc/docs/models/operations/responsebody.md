# ResponseBody

## Example Usage

```typescript
import { ResponseBody } from "@orq-ai/node/models/operations";

let value: ResponseBody = {
  modelName: "<value>",
  litellmParams: {
    useInPassThrough: false,
    useLitellmProxy: true,
    mergeReasoningContentInChoices: false,
    model: "Expedition",
  },
  modelInfo: {
    id: null,
    dbModel: false,
    key: "<key>",
    litellmProvider: "<value>",
    mode: "<value>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `modelName`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `litellmParams`                                                                                                      | [operations.GetV2ModelsLitellmModelsLitellmParams](../../models/operations/getv2modelslitellmmodelslitellmparams.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `modelInfo`                                                                                                          | [operations.GetV2ModelsLitellmModelsModelInfo](../../models/operations/getv2modelslitellmmodelsmodelinfo.md)         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |