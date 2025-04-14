# Filters7

## Example Usage

```typescript
import { Filters7 } from "@orq-ai/node/models/operations";

let value: Filters7 = {
  operator: "equals",
  type: "multi-value-array",
  selectedOptionId: "<id>",
  options: [
    {
      name: "<value>",
      path: "/etc/mail",
      type: "object",
      id: "<id>",
      evaluatorId: "<id>",
      evaluatorType: "typescript_eval",
      evaluatorOutputType: "number",
    },
  ],
  name: "<value>",
  path: "/private/var",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `operator`                                                                                                                                               | *operations.ListSessionsFiltersSessionsRequestRequestBodyQuery7Operator*                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `value`                                                                                                                                                  | *any*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |
| `type`                                                                                                                                                   | [operations.ListSessionsFiltersSessionsRequestRequestBodyQuery7Type](../../models/operations/listsessionsfilterssessionsrequestrequestbodyquery7type.md) | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `selectedOptionId`                                                                                                                                       | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `options`                                                                                                                                                | [operations.ListSessionsFiltersSessionsOptions](../../models/operations/listsessionsfilterssessionsoptions.md)[]                                         | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `name`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `path`                                                                                                                                                   | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |
| `hideOperators`                                                                                                                                          | *operations.ListSessionsFiltersSessionsRequestRequestBodyQuery7HideOperators1*[]                                                                         | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |