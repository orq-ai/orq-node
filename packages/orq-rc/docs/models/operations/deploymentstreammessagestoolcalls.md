# DeploymentStreamMessagesToolCalls

## Example Usage

```typescript
import { DeploymentStreamMessagesToolCalls } from "@orq-ai/node/models/operations";

let value: DeploymentStreamMessagesToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the tool call.                                                                                   |
| `type`                                                                                                     | [operations.DeploymentStreamMessagesType](../../models/operations/deploymentstreammessagestype.md)         | :heavy_check_mark:                                                                                         | The type of the tool. Currently, only `function` is supported.                                             |
| `function`                                                                                                 | [operations.DeploymentStreamMessagesFunction](../../models/operations/deploymentstreammessagesfunction.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |