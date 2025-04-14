# Filters6

## Example Usage

```typescript
import { Filters6 } from "@orq-ai/node/models/operations";

let value: Filters6 = {
  operator: "is_not_empty",
  type: "date",
  options: [
    {
      name: "<value>",
      path: "/tmp",
      type: "string",
      id: "<id>",
    },
  ],
  selectedOptionId: "<id>",
  name: "<value>",
  path: "/media",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `operator`                                                                                                                                             | *operations.ListSessionsFiltersSessionsRequestRequestBodyQueryOperator*                                                                                | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `value`                                                                                                                                                | *any*                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |
| `type`                                                                                                                                                 | [operations.ListSessionsFiltersSessionsRequestRequestBodyQueryType](../../models/operations/listsessionsfilterssessionsrequestrequestbodyquerytype.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `options`                                                                                                                                              | [operations.ListSessionsFiltersOptions](../../models/operations/listsessionsfiltersoptions.md)[]                                                       | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `selectedOptionId`                                                                                                                                     | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `name`                                                                                                                                                 | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `path`                                                                                                                                                 | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `hideOperators`                                                                                                                                        | *operations.ListSessionsFiltersSessionsRequestRequestBodyQueryHideOperators*[]                                                                         | :heavy_minus_sign:                                                                                                                                     | N/A                                                                                                                                                    |