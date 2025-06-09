# RequestBody

## Example Usage

```typescript
import { RequestBody } from "@orq-ai/node/models/operations";

let value: RequestBody = {
  modelName: "<value>",
  litellmParams: {
    useInPassThrough: true,
    useLitellmProxy: false,
    mergeReasoningContentInChoices: false,
    model: "Sentra",
  },
  modelInfo: {
    id: "<id>",
    dbModel: true,
    key: "<key>",
    litellmProvider: "<value>",
    mode: "<value>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `modelName`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `litellmParams`                                                      | [operations.LitellmParams](../../models/operations/litellmparams.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `modelInfo`                                                          | [operations.ModelInfo](../../models/operations/modelinfo.md)         | :heavy_check_mark:                                                   | N/A                                                                  |