# Parameters3

## Example Usage

```typescript
import { Parameters3 } from "@orq-ai/node/models/operations";

let value: Parameters3 = {
  id: "2e273de2-3e28-49e5-b357-cb80c9111536",
  name: "<value>",
  parameter: "seed",
  description:
    "at compromise zowie negligible ew wring tenderly brightly sugary psst",
  isActive: true,
  parameterType: "select",
  config: {
    default: "<value>",
    options: [],
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                       | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `name`                                                                                                                                     | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `parameter`                                                                                                                                | [operations.PostV2ModelsLitellmImportParametersParameter](../../models/operations/postv2modelslitellmimportparametersparameter.md)         | :heavy_check_mark:                                                                                                                         | Parameters value                                                                                                                           |
| `description`                                                                                                                              | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `hints`                                                                                                                                    | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `isActive`                                                                                                                                 | *boolean*                                                                                                                                  | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `position`                                                                                                                                 | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `parameterType`                                                                                                                            | [operations.PostV2ModelsLitellmImportParametersParameterType](../../models/operations/postv2modelslitellmimportparametersparametertype.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `config`                                                                                                                                   | [operations.PostV2ModelsLitellmImportParametersConfig](../../models/operations/postv2modelslitellmimportparametersconfig.md)               | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |