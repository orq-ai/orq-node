# Seven

## Example Usage

```typescript
import { Seven } from "@orq-ai/node/models/operations";

let value: Seven = {
  operator: "is",
  type: "boolean",
  selectedOptionId: "<id>",
  options: [
    {
      name: "<value>",
      path: "/selinux",
      type: "string",
      id: "<id>",
      evaluatorId: "<id>",
      evaluatorType: "json_schema",
      evaluatorOutputType: "number",
    },
  ],
  name: "<value>",
  path: "/Users",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `operator`                                                                                                                                               | *operations.GetAllPromptsFiltersPromptsRequestRequestBodyQuery7Operator*                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `value`                                                                                                                                                  | *any*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |
| `type`                                                                                                                                                   | [operations.GetAllPromptsFiltersPromptsRequestRequestBodyQuery7Type](../../models/operations/getallpromptsfilterspromptsrequestrequestbodyquery7type.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `selectedOptionId`                                                                                                                                       | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `options`                                                                                                                                                | [operations.GetAllPromptsFiltersPromptsOptions](../../models/operations/getallpromptsfilterspromptsoptions.md)[]                                         | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `name`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `path`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `hideOperators`                                                                                                                                          | *operations.GetAllPromptsFiltersPromptsRequestRequestBodyQuery7HideOperators1*[]                                                                         | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |