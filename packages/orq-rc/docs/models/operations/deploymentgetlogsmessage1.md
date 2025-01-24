# DeploymentGetLogsMessage1

## Example Usage

```typescript
import { DeploymentGetLogsMessage1 } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsMessage1 = {
  role: "user",
  toolCalls: [
    {
      type: "function",
      function: {
        name: "<value>",
        arguments: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                         | [operations.DeploymentGetLogsMessageRole](../../models/operations/deploymentgetlogsmessagerole.md)             | :heavy_check_mark:                                                                                             | The role of the prompt message                                                                                 |
| `content`                                                                                                      | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `toolCalls`                                                                                                    | [operations.DeploymentGetLogsMessageToolCalls](../../models/operations/deploymentgetlogsmessagetoolcalls.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |