# DeploymentGetLogsDataDeploymentsParameters

The parameters the functions accepts, described as a JSON Schema object. 

 Omitting `parameters` defines a function with an empty parameter list.

## Example Usage

```typescript
import { DeploymentGetLogsDataDeploymentsParameters } from "@orq-ai/node/models/operations";

let value: DeploymentGetLogsDataDeploymentsParameters = {
  type: "object",
  properties: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                           | [operations.DeploymentGetLogsDataDeploymentsResponse200ApplicationJSONResponseBody4Type](../../models/operations/deploymentgetlogsdatadeploymentsresponse200applicationjsonresponsebody4type.md) | :heavy_check_mark:                                                                                                                                                                               | N/A                                                                                                                                                                                              |
| `properties`                                                                                                                                                                                     | Record<string, *any*>                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                               | N/A                                                                                                                                                                                              |
| `required`                                                                                                                                                                                       | *string*[]                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                               | N/A                                                                                                                                                                                              |
| `additionalProperties`                                                                                                                                                                           | *boolean*                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                               | N/A                                                                                                                                                                                              |