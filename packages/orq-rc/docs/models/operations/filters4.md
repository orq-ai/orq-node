# Filters4

## Example Usage

```typescript
import { Filters4 } from "@orq-ai/node/models/operations";

let value: Filters4 = {
  operator: "is_greater_than",
  value: [
    8371.33,
  ],
  type: "string",
  name: "<value>",
  path: "/private",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `operator`                                                                                                                     | [operations.ListSessionsFiltersSessionsRequestOperator](../../models/operations/listsessionsfilterssessionsrequestoperator.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `value`                                                                                                                        | *operations.ListSessionsFiltersValue*                                                                                          | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `type`                                                                                                                         | [operations.ListSessionsFiltersSessionsRequestType](../../models/operations/listsessionsfilterssessionsrequesttype.md)         | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `path`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `hideOperators`                                                                                                                | *operations.ListSessionsFiltersSessionsHideOperators*[]                                                                        | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |