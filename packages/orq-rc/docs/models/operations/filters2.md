# Filters2

## Example Usage

```typescript
import { Filters2 } from "@orq-ai/node/models/operations";

let value: Filters2 = {
  operator: "contains",
  value: [
    "<value>",
  ],
  type: "multi-value-array",
  options: [
    "<value>",
  ],
  name: "<value>",
  path: "/boot/defaults",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `operator`                                                                                       | [operations.ListSessionsFiltersOperator](../../models/operations/listsessionsfiltersoperator.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `value`                                                                                          | *any*[]                                                                                          | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `type`                                                                                           | [operations.ListSessionsFiltersType](../../models/operations/listsessionsfilterstype.md)         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `options`                                                                                        | *operations.FiltersOptions*[]                                                                    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `optionsMap`                                                                                     | Record<string, *operations.FiltersOptionsMap*>                                                   | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `imageUrlMap`                                                                                    | Record<string, *string*>                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `path`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `hideOperators`                                                                                  | *operations.FiltersHideOperators*[]                                                              | :heavy_minus_sign:                                                                               | N/A                                                                                              |