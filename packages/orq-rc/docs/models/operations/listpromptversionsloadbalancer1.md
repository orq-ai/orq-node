# ListPromptVersionsLoadBalancer1

## Example Usage

```typescript
import { ListPromptVersionsLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: ListPromptVersionsLoadBalancer1 = {
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [operations.ListPromptVersionsLoadBalancerType](../../models/operations/listpromptversionsloadbalancertype.md)       | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `models`                                                                                                             | [operations.ListPromptVersionsLoadBalancerModels](../../models/operations/listpromptversionsloadbalancermodels.md)[] | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |