# DeploymentGetLogsDataTools

## Example Usage

```typescript
import { DeploymentGetLogsDataTools } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsDataTools = {
  type: "function",
  function: {
    name: "<value>",
    parameters: {
      type: "object",
      properties: {
        "key": "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [operations.DeploymentGetLogsDataType](../../models/operations/deploymentgetlogsdatatype.md)         | :heavy_check_mark:                                                                                   | The type of the tool. Currently, only `function` is supported.                                       |
| `function`                                                                                           | [operations.DeploymentGetLogsDataFunction](../../models/operations/deploymentgetlogsdatafunction.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |