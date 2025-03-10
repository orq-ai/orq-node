# MessageToolCalls

## Example Usage

```typescript
import { MessageToolCalls } from "@orq-ai/node/models/operations";

let value: MessageToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `index`                                                                                                      | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | [operations.DeploymentCreateMetricMessageType](../../models/operations/deploymentcreatemetricmessagetype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `function`                                                                                                   | [operations.MessageFunction](../../models/operations/messagefunction.md)                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |