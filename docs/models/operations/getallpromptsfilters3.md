# GetAllPromptsFilters3

## Example Usage

```typescript
import { GetAllPromptsFilters3 } from "@orq-ai/node/models/operations";

let value: GetAllPromptsFilters3 = {
  operator: "is_relative_time",
  value: {
    criteria: {},
    mode: "date",
  },
  type: "multi-value-array",
  name: "<value>",
  path: "/sys",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `operator`                                                                                                                     | [operations.GetAllPromptsFiltersPromptsRequestOperator](../../models/operations/getallpromptsfilterspromptsrequestoperator.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `value`                                                                                                                        | [operations.FiltersValue](../../models/operations/filtersvalue.md)                                                             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `type`                                                                                                                         | [operations.GetAllPromptsFiltersPromptsRequestType](../../models/operations/getallpromptsfilterspromptsrequesttype.md)         | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `path`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `hideOperators`                                                                                                                | *operations.GetAllPromptsFiltersHideOperators*[]                                                                               | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |