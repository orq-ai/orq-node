# ListActionsData

## Example Usage

```typescript
import { ListActionsData } from "@orq-ai/node/models/operations";

let value: ListActionsData = {
  id: "<id>",
  agentToolCallId: "<id>",
  tool: {
    id: "<id>",
    displayName: "Murl_Von75",
  },
  created: "<value>",
  updated: "<value>",
  agentId: "<id>",
  actionType: "<value>",
  agentExecutionId: "<id>",
  workspaceId: "<id>",
  state: {
    input: {},
    output: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                 | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | Internal id for the action                                                                                                                           |
| `agentToolCallId`                                                                                                                                    | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The tool call id what the agent chooses to use and generates                                                                                         |
| `tool`                                                                                                                                               | [operations.ListActionsTool](../../models/operations/listactionstool.md)                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `created`                                                                                                                                            | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `updated`                                                                                                                                            | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `started`                                                                                                                                            | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `finished`                                                                                                                                           | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `agentId`                                                                                                                                            | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `actionType`                                                                                                                                         | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `agentExecutionId`                                                                                                                                   | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `workspaceId`                                                                                                                                        | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `state`                                                                                                                                              | [operations.ListActionsState](../../models/operations/listactionsstate.md)                                                                           | :heavy_check_mark:                                                                                                                                   | An action is a tool that an agent chooses to use. If executed is false, together with the output being there, it can indicate that a tool was mocked |