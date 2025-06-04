# DeploymentsParameters

The parameters the functions accepts, described as a JSON Schema object. 

 Omitting `parameters` defines a function with an empty parameter list.

## Example Usage

```typescript
import { DeploymentsParameters } from "@orq-ai/node/models/operations";

let value: DeploymentsParameters = {
  type: "object",
  properties: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [operations.DeploymentsDeploymentsResponseType](../../models/operations/deploymentsdeploymentsresponsetype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `properties`                                                                                                   | Record<string, *any*>                                                                                          | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `required`                                                                                                     | *string*[]                                                                                                     | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `additionalProperties`                                                                                         | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |