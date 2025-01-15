# GetAllPromptsFilters4

## Example Usage

```typescript
import { GetAllPromptsFilters4 } from "@orq-ai/node/models/operations";

let value: GetAllPromptsFilters4 = {
  type: "string_array",
  operator: "in",
  values: [
    "<value>",
  ],
  path: "/mnt",
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                 | [operations.GetAllPromptsFiltersPromptsRequestRequestBody4Type](../../models/operations/getallpromptsfilterspromptsrequestrequestbody4type.md)         | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `operator`                                                                                                                                             | [operations.GetAllPromptsFiltersPromptsRequestRequestBody4Operator](../../models/operations/getallpromptsfilterspromptsrequestrequestbody4operator.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `values`                                                                                                                                               | *string*[]                                                                                                                                             | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `path`                                                                                                                                                 | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |