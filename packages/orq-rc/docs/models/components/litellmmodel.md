# LiteLLMModel

## Example Usage

```typescript
import { LiteLLMModel } from "@orq-ai/node/models/components";

let value: LiteLLMModel = {
  litellmParams: {
    mergeReasoningContentInChoices: true,
    model: "Expedition",
    useInPassThrough: true,
    useLitellmProxy: false,
  },
  modelInfo: {
    dbModel: null,
    id: "<id>",
    key: "<key>",
    litellmProvider: "<value>",
    mode: "<value>",
  },
  modelName: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `litellmParams`                                                            | [components.LiteLLMParams](../../models/components/litellmparams.md)       | :heavy_check_mark:                                                         | N/A                                                                        |
| `modelInfo`                                                                | [components.LiteLLMModelInfo](../../models/components/litellmmodelinfo.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `modelName`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |