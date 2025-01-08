# Four

## Example Usage

```typescript
import { Four } from "@orq-ai/node/models/operations";

let value: Four = {
  type: "string_array",
  operator: "in",
  values: [
    "<value>",
  ],
  path: "/usr/lib",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                 | [operations.GetAllPromptTemplatesFiltersPromptTemplatesRequestType](../../models/operations/getallprompttemplatesfiltersprompttemplatesrequesttype.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `operator`                                                                                                                                             | [operations.FiltersOperator](../../models/operations/filtersoperator.md)                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `values`                                                                                                                                               | *string*[]                                                                                                                                             | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `path`                                                                                                                                                 | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |