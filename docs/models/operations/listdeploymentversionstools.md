# ListDeploymentVersionsTools

## Example Usage

```typescript
import { ListDeploymentVersionsTools } from "@orq-ai/node/models/operations";

let value: ListDeploymentVersionsTools = {
  type: "function",
  function: {
    name: "<value>",
    parameters: {
      type: "object",
      properties: {},
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `displayName`                                                                                          | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [operations.ListDeploymentVersionsType](../../models/operations/listdeploymentversionstype.md)         | :heavy_check_mark:                                                                                     | The type of the tool. Currently, only `function` is supported.                                         |
| `function`                                                                                             | [operations.ListDeploymentVersionsFunction](../../models/operations/listdeploymentversionsfunction.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `id`                                                                                                   | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |