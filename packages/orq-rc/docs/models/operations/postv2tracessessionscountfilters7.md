# PostV2TracesSessionsCountFilters7

## Example Usage

```typescript
import { PostV2TracesSessionsCountFilters7 } from "@orq-ai/node/models/operations";

let value: PostV2TracesSessionsCountFilters7 = {
  operator: "is_not_equal",
  type: "evaluator",
  selectedOptionId: "<id>",
  options: [
    {
      name: "<value>",
      path: "/proc",
      type: "object",
      id: "<id>",
      evaluatorId: "<id>",
      evaluatorType: "function_eval",
      evaluatorOutputType: "enum",
    },
  ],
  name: "<value>",
  path: "/proc",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `operator`                                                                                                                                                               | *operations.PostV2TracesSessionsCountFiltersRequestRequestBodyQuery7Operator*                                                                                            | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `value`                                                                                                                                                                  | *any*                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `type`                                                                                                                                                                   | [operations.PostV2TracesSessionsCountFiltersRequestRequestBodyQuery7Type](../../models/operations/postv2tracessessionscountfiltersrequestrequestbodyquery7type.md)       | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `selectedOptionId`                                                                                                                                                       | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `options`                                                                                                                                                                | [operations.PostV2TracesSessionsCountFiltersRequestRequestBodyQueryOptions](../../models/operations/postv2tracessessionscountfiltersrequestrequestbodyqueryoptions.md)[] | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `name`                                                                                                                                                                   | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `path`                                                                                                                                                                   | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `hideOperators`                                                                                                                                                          | *operations.PostV2TracesSessionsCountFiltersRequestRequestBodyQuery7HideOperators1*[]                                                                                    | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |