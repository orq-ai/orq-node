# ListSessionsFilters4

## Example Usage

```typescript
import { ListSessionsFilters4 } from "@orq-ai/node/models/operations";

let value: ListSessionsFilters4 = {
  type: "string_array",
  operator: "in",
  values: [
    "<value>",
  ],
  path: "/var/spool",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                 | [operations.ListSessionsFiltersSessionsRequestRequestBody4Type](../../models/operations/listsessionsfilterssessionsrequestrequestbody4type.md)         | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `operator`                                                                                                                                             | [operations.ListSessionsFiltersSessionsRequestRequestBody4Operator](../../models/operations/listsessionsfilterssessionsrequestrequestbody4operator.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `values`                                                                                                                                               | *string*[]                                                                                                                                             | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `path`                                                                                                                                                 | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |