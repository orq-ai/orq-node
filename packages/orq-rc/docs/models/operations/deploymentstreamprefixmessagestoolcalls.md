# DeploymentStreamPrefixMessagesToolCalls

## Example Usage

```typescript
import { DeploymentStreamPrefixMessagesToolCalls } from "@orq-ai/node/models/operations";

let value: DeploymentStreamPrefixMessagesToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the tool call.                                                                                               |
| `type`                                                                                                                 | [operations.DeploymentStreamPrefixMessagesType](../../models/operations/deploymentstreamprefixmessagestype.md)         | :heavy_check_mark:                                                                                                     | The type of the tool. Currently, only `function` is supported.                                                         |
| `function`                                                                                                             | [operations.DeploymentStreamPrefixMessagesFunction](../../models/operations/deploymentstreamprefixmessagesfunction.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |