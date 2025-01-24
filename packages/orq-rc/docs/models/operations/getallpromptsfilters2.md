# GetAllPromptsFilters2

## Example Usage

```typescript
import { GetAllPromptsFilters2 } from "@orq-ai/node/models/operations";

let value: GetAllPromptsFilters2 = {
  operator: "is_empty",
  value: [
    "<value>",
  ],
  type: "boolean",
  options: [
    "<value>",
  ],
  name: "<value>",
  path: "/usr/src",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `operator`                                                                                                       | [operations.GetAllPromptsFiltersPromptsOperator](../../models/operations/getallpromptsfilterspromptsoperator.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `value`                                                                                                          | *any*[]                                                                                                          | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | [operations.GetAllPromptsFiltersPromptsType](../../models/operations/getallpromptsfilterspromptstype.md)         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `options`                                                                                                        | *operations.GetAllPromptsFiltersPromptsOptions*[]                                                                | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `optionsMap`                                                                                                     | Record<string, *operations.GetAllPromptsFiltersPromptsOptionsMap*>                                               | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `imageUrlMap`                                                                                                    | Record<string, *string*>                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `name`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `path`                                                                                                           | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `hideOperators`                                                                                                  | *operations.GetAllPromptsFiltersPromptsHideOperators*[]                                                          | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |