# DeploymentsToolCalls

## Example Usage

```typescript
import { DeploymentsToolCalls } from "@orq-ai/node/models/operations";

let value: DeploymentsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `index`                                                                                                | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [operations.DeploymentsDeploymentsType](../../models/operations/deploymentsdeploymentstype.md)         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `function`                                                                                             | [operations.DeploymentsDeploymentsFunction](../../models/operations/deploymentsdeploymentsfunction.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |