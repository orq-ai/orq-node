# GetAllPromptsFilters1

## Example Usage

```typescript
import { GetAllPromptsFilters1 } from "@orq-ai/node/models/operations";

let value: GetAllPromptsFilters1 = {
  operator: "is_not_empty",
  type: "single-value-array",
  options: [
    "<value>",
  ],
  name: "<value>",
  path: "/proc",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `operator`                                                                                         | [operations.GetAllPromptsFiltersOperator](../../models/operations/getallpromptsfiltersoperator.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `value`                                                                                            | *any*                                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [operations.GetAllPromptsFiltersType](../../models/operations/getallpromptsfilterstype.md)         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `options`                                                                                          | *operations.GetAllPromptsFiltersOptions*[]                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `optionsMap`                                                                                       | Record<string, *operations.GetAllPromptsFiltersOptionsMap*>                                        | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `imageUrlMap`                                                                                      | Record<string, *string*>                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `path`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `hideOperators`                                                                                    | *operations.GetAllPromptsFiltersHideOperators*[]                                                   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |