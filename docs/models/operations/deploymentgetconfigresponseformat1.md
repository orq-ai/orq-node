# DeploymentGetConfigResponseFormat1

## Example Usage

```typescript
import { DeploymentGetConfigResponseFormat1 } from "@orq-ai/node/models/operations";

let value: DeploymentGetConfigResponseFormat1 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    schema: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                     | [operations.DeploymentGetConfigResponseFormatDeploymentsResponseType](../../models/operations/deploymentgetconfigresponseformatdeploymentsresponsetype.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `jsonSchema`                                                                                                                                               | [operations.DeploymentGetConfigResponseFormatJsonSchema](../../models/operations/deploymentgetconfigresponseformatjsonschema.md)                           | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |