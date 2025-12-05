# AgentToolInputRunFunctionToolRun

Function tool with inline definition for on-the-fly creation in run endpoint

## Example Usage

```typescript
import { AgentToolInputRunFunctionToolRun } from "@orq-ai/node/models/operations";

let value: AgentToolInputRunFunctionToolRun = {
  type: "function",
  key: "<key>",
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | *"function"*                                                                                                             | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `key`                                                                                                                    | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | Unique key of the tool as it will be displayed in the UI                                                                 |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `displayName`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `function`                                                                                                               | [operations.StreamRunAgentAgentToolInputRunFunction](../../models/operations/streamrunagentagenttoolinputrunfunction.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `requiresApproval`                                                                                                       | *boolean*                                                                                                                | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |