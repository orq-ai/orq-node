# GetAllPromptsFilters1

## Example Usage

```typescript
import { GetAllPromptsFilters1 } from "@orq-ai/node/models/operations";

let value: GetAllPromptsFilters1 = {
  operator: "is_not",
  type: "string",
  options: [
    9649.38,
  ],
  name: "<value>",
  path: "/usr/libexec",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `operator`                                                                                         | [operations.GetAllPromptsFiltersOperator](../../models/operations/getallpromptsfiltersoperator.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `value`                                                                                            | *any*                                                                                              | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [operations.GetAllPromptsFiltersType](../../models/operations/getallpromptsfilterstype.md)         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `options`                                                                                          | *operations.Options*[]                                                                             | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `optionsMap`                                                                                       | Record<string, *operations.OptionsMap*>                                                            | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `imageUrlMap`                                                                                      | Record<string, *string*>                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `path`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `hideOperators`                                                                                    | *operations.HideOperators*[]                                                                       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |