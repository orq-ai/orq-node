# PrefixMessagesToolCalls

## Example Usage

```typescript
import { PrefixMessagesToolCalls } from "@orq-ai/node/models/operations";

let value: PrefixMessagesToolCalls = {
  id: "<id>",
  type: "function",
  function: {},
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the tool call.                                                                                       |
| `type`                                                                                                         | [operations.DeploymentStreamPrefixMessagesType](../../models/operations/deploymentstreamprefixmessagestype.md) | :heavy_check_mark:                                                                                             | The type of the tool. Currently, only `function` is supported.                                                 |
| `function`                                                                                                     | [operations.PrefixMessagesFunction](../../models/operations/prefixmessagesfunction.md)                         | :heavy_check_mark:                                                                                             | N/A                                                                                                            |