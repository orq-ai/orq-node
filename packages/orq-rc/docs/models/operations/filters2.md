# Filters2

## Example Usage

```typescript
import { Filters2 } from "@orq-ai/node/models/operations";

let value: Filters2 = {
  operator: "is_not_empty",
  value: [
    "<value>",
  ],
  type: "string",
  options: [
    6003.92,
  ],
  name: "<value>",
  path: "/srv",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `operator`                                                                                                 | [operations.DeploymentGetLogsFiltersOperator](../../models/operations/deploymentgetlogsfiltersoperator.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `value`                                                                                                    | *any*[]                                                                                                    | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `type`                                                                                                     | [operations.DeploymentGetLogsFiltersType](../../models/operations/deploymentgetlogsfilterstype.md)         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `options`                                                                                                  | *operations.FiltersOptions*[]                                                                              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `optionsMap`                                                                                               | Record<string, *operations.FiltersOptionsMap*>                                                             | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `imageUrlMap`                                                                                              | Record<string, *string*>                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `path`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `hideOperators`                                                                                            | *operations.FiltersHideOperators*[]                                                                        | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |