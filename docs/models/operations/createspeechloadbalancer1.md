# CreateSpeechLoadBalancer1

## Example Usage

```typescript
import { CreateSpeechLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: CreateSpeechLoadBalancer1 = {
  type: "weight_based",
  models: [
    {
      model: "openai/gpt-4o",
      weight: 0.7,
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [operations.CreateSpeechLoadBalancerType](../../models/operations/createspeechloadbalancertype.md)       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `models`                                                                                                 | [operations.CreateSpeechLoadBalancerModels](../../models/operations/createspeechloadbalancermodels.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |