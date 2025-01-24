# GetAllPromptsFilters4

## Example Usage

```typescript
import { GetAllPromptsFilters4 } from "@orq-ai/node/models/operations";

let value: GetAllPromptsFilters4 = {
  operator: "is_greater_than",
  value: [
    7795.71,
  ],
  type: "evaluator",
  name: "<value>",
  path: "/private",
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `operator`                                                                                                                                           | [operations.GetAllPromptsFiltersPromptsRequestRequestBodyOperator](../../models/operations/getallpromptsfilterspromptsrequestrequestbodyoperator.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `value`                                                                                                                                              | *operations.GetAllPromptsFiltersPromptsValue*                                                                                                        | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `type`                                                                                                                                               | [operations.GetAllPromptsFiltersPromptsRequestRequestBodyType](../../models/operations/getallpromptsfilterspromptsrequestrequestbodytype.md)         | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `name`                                                                                                                                               | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `path`                                                                                                                                               | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `hideOperators`                                                                                                                                      | *operations.GetAllPromptsFiltersPromptsRequestRequestBodyHideOperators*[]                                                                            | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |