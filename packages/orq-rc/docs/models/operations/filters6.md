# Filters6

## Example Usage

```typescript
import { Filters6 } from "@orq-ai/node/models/operations";

let value: Filters6 = {
  operator: "is_not_empty",
  type: "string",
  options: [
    {
      name: "<value>",
      path: "/private/var",
      type: "evaluator",
      id: "<id>",
    },
  ],
  selectedOptionId: "<id>",
  name: "<value>",
  path: "/var/yp",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `operator`                                                                                                                                               | *operations.GetAllPromptsFiltersPromptsRequestRequestBodyQuery6Operator*                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `value`                                                                                                                                                  | *any*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |
| `type`                                                                                                                                                   | [operations.GetAllPromptsFiltersPromptsRequestRequestBodyQuery6Type](../../models/operations/getallpromptsfilterspromptsrequestrequestbodyquery6type.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `options`                                                                                                                                                | [operations.GetAllPromptsFiltersPromptsRequestOptions](../../models/operations/getallpromptsfilterspromptsrequestoptions.md)[]                           | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `selectedOptionId`                                                                                                                                       | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `name`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `path`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `hideOperators`                                                                                                                                          | *operations.GetAllPromptsFiltersPromptsRequestRequestBodyQuery6HideOperators1*[]                                                                         | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |