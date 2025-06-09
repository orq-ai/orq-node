# Parameters2

## Example Usage

```typescript
import { Parameters2 } from "@orq-ai/node/models/operations";

let value: Parameters2 = {
  id: "600e603a-fb1f-40a8-88e7-ce7a88ce9f5b",
  name: "<value>",
  parameter: "numImages",
  description: "happily cheerfully bah ugh inveigle",
  isActive: false,
  parameterType: "switch",
  config: {
    default: true,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `parameter`                                                                              | [operations.ParametersParameter](../../models/operations/parametersparameter.md)         | :heavy_check_mark:                                                                       | Parameters value                                                                         |
| `description`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `hints`                                                                                  | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `isActive`                                                                               | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `position`                                                                               | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `parameterType`                                                                          | [operations.ParametersParameterType](../../models/operations/parametersparametertype.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `config`                                                                                 | [operations.ParametersConfig](../../models/operations/parametersconfig.md)               | :heavy_check_mark:                                                                       | N/A                                                                                      |