# Filters7

## Example Usage

```typescript
import { Filters7 } from "@orq-ai/node/models/operations";

let value: Filters7 = {
  operator: "is_less_than",
  type: "date",
  selectedOptionId: "<id>",
  options: [
    {
      name: "<value>",
      path: "/dev",
      type: "date",
      id: "<id>",
      evaluatorId: "<id>",
      evaluatorType: "json_schema",
      evaluatorOutputType: "boolean",
    },
  ],
  name: "<value>",
  path: "/net",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `operator`                                                                                                                                               | *operations.GetAllPromptsFiltersPromptsRequestRequestBodyQuery7Operator*                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `value`                                                                                                                                                  | *any*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |
| `type`                                                                                                                                                   | [operations.GetAllPromptsFiltersPromptsRequestRequestBodyQuery7Type](../../models/operations/getallpromptsfilterspromptsrequestrequestbodyquery7type.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `selectedOptionId`                                                                                                                                       | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `options`                                                                                                                                                | [operations.GetAllPromptsFiltersPromptsRequestRequestBodyOptions](../../models/operations/getallpromptsfilterspromptsrequestrequestbodyoptions.md)[]     | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `name`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `path`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `hideOperators`                                                                                                                                          | *operations.GetAllPromptsFiltersPromptsRequestRequestBodyQuery7HideOperators1*[]                                                                         | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |