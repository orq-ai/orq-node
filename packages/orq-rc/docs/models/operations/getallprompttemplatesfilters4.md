# GetAllPromptTemplatesFilters4

## Example Usage

```typescript
import { GetAllPromptTemplatesFilters4 } from "@orq-ai/node/models/operations";

let value: GetAllPromptTemplatesFilters4 = {
  type: "string_array",
  operator: "in",
  values: [
    "<value>",
  ],
  path: "/etc/periodic",
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                       | [operations.GetAllPromptTemplatesFiltersPromptTemplatesRequestRequestBodyType](../../models/operations/getallprompttemplatesfiltersprompttemplatesrequestrequestbodytype.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `operator`                                                                                                                                                                   | [operations.GetAllPromptTemplatesFiltersPromptTemplatesOperator](../../models/operations/getallprompttemplatesfiltersprompttemplatesoperator.md)                             | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `values`                                                                                                                                                                     | *string*[]                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `path`                                                                                                                                                                       | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |