# EvalsTools

## Example Usage

```typescript
import { EvalsTools } from "@orq-ai/node/models/operations";

let value: EvalsTools = {
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

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                       | [operations.DeploymentGetLogsEvalsDeploymentsResponse200ApplicationJSONResponseBodyData17Type](../../models/operations/deploymentgetlogsevalsdeploymentsresponse200applicationjsonresponsebodydata17type.md) | :heavy_check_mark:                                                                                                                                                                                           | The type of the tool. Currently, only `function` is supported.                                                                                                                                               |
| `function`                                                                                                                                                                                                   | [operations.EvalsFunction](../../models/operations/evalsfunction.md)                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                           | N/A                                                                                                                                                                                                          |