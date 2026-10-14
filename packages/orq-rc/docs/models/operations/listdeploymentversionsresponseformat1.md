# ListDeploymentVersionsResponseFormat1

## Example Usage

```typescript
import { ListDeploymentVersionsResponseFormat1 } from "@orq-ai/node/models/operations";

let value: ListDeploymentVersionsResponseFormat1 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    schema: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                       | [operations.ListDeploymentVersionsResponseFormatType](../../models/operations/listdeploymentversionsresponseformattype.md)                                   | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `displayName`                                                                                                                                                | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `jsonSchema`                                                                                                                                                 | [operations.ListDeploymentVersionsResponseFormatDeploymentsJsonSchema](../../models/operations/listdeploymentversionsresponseformatdeploymentsjsonschema.md) | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |