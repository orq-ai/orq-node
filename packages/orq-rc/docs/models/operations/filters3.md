# Filters3

## Example Usage

```typescript
import { Filters3 } from "@orq-ai/node/models/operations";

let value: Filters3 = {
  operator: "is_on_or_before",
  value: {
    criteria: {},
    mode: "date",
  },
  type: "boolean",
  name: "<value>",
  path: "/private/tmp",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `operator`                                                                                                       | [operations.ListSessionsFiltersSessionsOperator](../../models/operations/listsessionsfilterssessionsoperator.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `value`                                                                                                          | [operations.FiltersValue](../../models/operations/filtersvalue.md)                                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | [operations.ListSessionsFiltersSessionsType](../../models/operations/listsessionsfilterssessionstype.md)         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `path`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `hideOperators`                                                                                                  | *operations.ListSessionsFiltersHideOperators*[]                                                                  | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |