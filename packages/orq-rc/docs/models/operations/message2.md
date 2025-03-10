# Message2

## Example Usage

```typescript
import { Message2 } from "@orq-ai/node/models/operations";

let value: Message2 = {
  role: "tool",
  content: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                       | [operations.DeploymentCreateMetricMessageRole](../../models/operations/deploymentcreatemetricmessagerole.md) | :heavy_check_mark:                                                                                           | The role of the prompt message                                                                               |
| `content`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |