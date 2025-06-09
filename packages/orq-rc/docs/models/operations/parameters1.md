# Parameters1

## Example Usage

```typescript
import { Parameters1 } from "@orq-ai/node/models/operations";

let value: Parameters1 = {
  id: "ffd5a9d2-8f8e-4df3-a4cd-8926224bda88",
  name: "<value>",
  parameter: "style",
  description: "warm co-producer minus so out sonar bin merrily",
  isActive: false,
  parameterType: "slider",
  config: {
    default: 1327.77,
    max: 6004.9,
    min: 1500.75,
    step: 1780.94,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `name`                                                               | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `parameter`                                                          | [operations.Parameter](../../models/operations/parameter.md)         | :heavy_check_mark:                                                   | Parameters value                                                     |
| `description`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `hints`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `isActive`                                                           | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `position`                                                           | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `parameterType`                                                      | [operations.ParameterType](../../models/operations/parametertype.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `config`                                                             | [operations.Config](../../models/operations/config.md)               | :heavy_check_mark:                                                   | N/A                                                                  |