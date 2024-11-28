# Filters4

## Example Usage

```typescript
import { Filters4 } from "@orq-ai/node/models/operations";

let value: Filters4 = {
  type: "string_array",
  operator: "in",
  values: [
    "<value>",
  ],
  path: "/usr/bin",
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                       | [operations.GetAllPromptsFiltersPromptsRequestRequestBodyType](../../models/operations/getallpromptsfilterspromptsrequestrequestbodytype.md) | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `operator`                                                                                                                                   | [operations.GetAllPromptsFiltersPromptsOperator](../../models/operations/getallpromptsfilterspromptsoperator.md)                             | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `values`                                                                                                                                     | *string*[]                                                                                                                                   | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |
| `path`                                                                                                                                       | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |