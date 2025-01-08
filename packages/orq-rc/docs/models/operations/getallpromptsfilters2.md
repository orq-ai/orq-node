# GetAllPromptsFilters2

## Example Usage

```typescript
import { GetAllPromptsFilters2 } from "@orq-ai/node/models/operations";

let value: GetAllPromptsFilters2 = {
  operator: "does_not_contain",
  value: [
    "<value>",
  ],
  type: "string",
  options: [
    "<value>",
  ],
  name: "<value>",
  path: "/System",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `operator`                                                                                                       | [operations.GetAllPromptsFiltersPromptsOperator](../../models/operations/getallpromptsfilterspromptsoperator.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `value`                                                                                                          | *any*[]                                                                                                          | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | [operations.GetAllPromptsFiltersPromptsType](../../models/operations/getallpromptsfilterspromptstype.md)         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `options`                                                                                                        | *operations.FiltersOptions*[]                                                                                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `optionsMap`                                                                                                     | Record<string, *operations.FiltersOptionsMap*>                                                                   | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `imageUrlMap`                                                                                                    | Record<string, *string*>                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `path`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `hideOperators`                                                                                                  | *operations.FiltersHideOperators*[]                                                                              | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |