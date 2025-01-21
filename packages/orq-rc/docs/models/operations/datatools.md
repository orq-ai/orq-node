# DataTools

## Example Usage

```typescript
import { DataTools } from "@orq-ai/node/models/operations";

let value: DataTools = {
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

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                   | [operations.DeploymentGetLogsDataDeploymentsResponse200Type](../../models/operations/deploymentgetlogsdatadeploymentsresponse200type.md) | :heavy_check_mark:                                                                                                                       | The type of the tool. Currently, only `function` is supported.                                                                           |
| `function`                                                                                                                               | [operations.DataFunction](../../models/operations/datafunction.md)                                                                       | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |