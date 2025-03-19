# DeploymentCreateMetricMessagesToolCalls

## Example Usage

```typescript
import { DeploymentCreateMetricMessagesToolCalls } from "@orq-ai/node/models/operations";

let value: DeploymentCreateMetricMessagesToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the tool call.                                                                                               |
| `type`                                                                                                                 | [operations.DeploymentCreateMetricMessagesType](../../models/operations/deploymentcreatemetricmessagestype.md)         | :heavy_check_mark:                                                                                                     | The type of the tool. Currently, only `function` is supported.                                                         |
| `function`                                                                                                             | [operations.DeploymentCreateMetricMessagesFunction](../../models/operations/deploymentcreatemetricmessagesfunction.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |