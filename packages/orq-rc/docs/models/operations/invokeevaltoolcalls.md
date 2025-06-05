# InvokeEvalToolCalls

## Example Usage

```typescript
import { InvokeEvalToolCalls } from "@orq-ai/node/models/operations";

let value: InvokeEvalToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `index`                                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `type`                                                                         | [operations.InvokeEvalType](../../models/operations/invokeevaltype.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `function`                                                                     | [operations.InvokeEvalFunction](../../models/operations/invokeevalfunction.md) | :heavy_check_mark:                                                             | N/A                                                                            |