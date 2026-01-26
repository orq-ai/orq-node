# CreateCompletionLoadBalancer1

## Example Usage

```typescript
import { CreateCompletionLoadBalancer1 } from "@orq-ai/node/models/operations";

let value: CreateCompletionLoadBalancer1 = {
  type: "weight_based",
  models: [],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.CreateCompletionLoadBalancerType](../../models/operations/createcompletionloadbalancertype.md)       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `models`                                                                                                         | [operations.CreateCompletionLoadBalancerModels](../../models/operations/createcompletionloadbalancermodels.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |