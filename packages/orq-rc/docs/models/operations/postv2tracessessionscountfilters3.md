# PostV2TracesSessionsCountFilters3

## Example Usage

```typescript
import { PostV2TracesSessionsCountFilters3 } from "@orq-ai/node/models/operations";

let value: PostV2TracesSessionsCountFilters3 = {
  operator: "is",
  value: {
    criteria: {},
    mode: "date",
  },
  type: "evaluator",
  name: "<value>",
  path: "/bin",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `operator`                                                                                                                                                     | [operations.PostV2TracesSessionsCountFiltersRequestRequestBodyOperator](../../models/operations/postv2tracessessionscountfiltersrequestrequestbodyoperator.md) | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `value`                                                                                                                                                        | [operations.PostV2TracesSessionsCountFiltersValue](../../models/operations/postv2tracessessionscountfiltersvalue.md)                                           | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `type`                                                                                                                                                         | [operations.PostV2TracesSessionsCountFiltersRequestRequestBodyType](../../models/operations/postv2tracessessionscountfiltersrequestrequestbodytype.md)         | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `name`                                                                                                                                                         | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `path`                                                                                                                                                         | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |
| `hideOperators`                                                                                                                                                | *operations.PostV2TracesSessionsCountFiltersRequestRequestBodyHideOperators*[]                                                                                 | :heavy_minus_sign:                                                                                                                                             | N/A                                                                                                                                                            |