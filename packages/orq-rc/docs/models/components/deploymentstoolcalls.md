# DeploymentsToolCalls

## Example Usage

```typescript
import { DeploymentsToolCalls } from "@orq-ai/node/models/components";

let value: DeploymentsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `index`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `type`                                                                           | [components.DeploymentsType](../../models/components/deploymentstype.md)         | :heavy_check_mark:                                                               | N/A                                                                              |
| `function`                                                                       | [components.DeploymentsFunction](../../models/components/deploymentsfunction.md) | :heavy_check_mark:                                                               | N/A                                                                              |