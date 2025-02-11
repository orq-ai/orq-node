# Six

## Example Usage

```typescript
import { Six } from "@orq-ai/node/models/operations";

let value: Six = {
  operator: "is_not_empty",
  type: "evaluator",
  options: [
    {
      name: "<value>",
      path: "/etc/namedb",
      type: "boolean",
      id: "<id>",
    },
  ],
  selectedOptionId: "<id>",
  name: "<value>",
  path: "/srv",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `operator`                                                                                                                                               | *operations.GetAllPromptsFiltersPromptsRequestRequestBodyQuery6Operator*                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `value`                                                                                                                                                  | *any*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |
| `type`                                                                                                                                                   | [operations.GetAllPromptsFiltersPromptsRequestRequestBodyQuery6Type](../../models/operations/getallpromptsfilterspromptsrequestrequestbodyquery6type.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `options`                                                                                                                                                | [operations.GetAllPromptsFiltersOptions](../../models/operations/getallpromptsfiltersoptions.md)[]                                                       | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `selectedOptionId`                                                                                                                                       | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `name`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `path`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `hideOperators`                                                                                                                                          | *operations.GetAllPromptsFiltersPromptsRequestRequestBodyQueryHideOperators*[]                                                                           | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |