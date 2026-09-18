# CreateTranscriptionLoadBalancer1

## Example Usage

```typescript
import { CreateTranscriptionLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: CreateTranscriptionLoadBalancer1 = {
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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.CreateTranscriptionLoadBalancerType](../../models/operations/createtranscriptionloadbalancertype.md)       | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `models`                                                                                                               | [operations.CreateTranscriptionLoadBalancerModels](../../models/operations/createtranscriptionloadbalancermodels.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |