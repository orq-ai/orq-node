# DeploymentGetConfigResponseFormat2

## Example Usage

```typescript
import { DeploymentGetConfigResponseFormat2 } from "@orq-ai/node/models/operations";

let value: DeploymentGetConfigResponseFormat2 = {
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

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                           | [operations.DeploymentGetConfigResponseFormatType](../../models/operations/deploymentgetconfigresponseformattype.md)             | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `jsonSchema`                                                                                                                     | [operations.DeploymentGetConfigResponseFormatJsonSchema](../../models/operations/deploymentgetconfigresponseformatjsonschema.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |