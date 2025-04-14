# PostV2TracesSessionsCountFilters2

## Example Usage

```typescript
import { PostV2TracesSessionsCountFilters2 } from "@orq-ai/node/models/operations";

let value: PostV2TracesSessionsCountFilters2 = {
  operator: "contains",
  value: [
    "<value>",
  ],
  type: "evaluator",
  options: [
    "<value>",
  ],
  name: "<value>",
  path: "/usr/local/src",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `operator`                                                                                                                               | [operations.PostV2TracesSessionsCountFiltersRequestOperator](../../models/operations/postv2tracessessionscountfiltersrequestoperator.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `value`                                                                                                                                  | *any*[]                                                                                                                                  | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `type`                                                                                                                                   | [operations.PostV2TracesSessionsCountFiltersRequestType](../../models/operations/postv2tracessessionscountfiltersrequesttype.md)         | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `options`                                                                                                                                | *operations.PostV2TracesSessionsCountFiltersRequestOptions*[]                                                                            | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `optionsMap`                                                                                                                             | Record<string, *operations.PostV2TracesSessionsCountFiltersRequestOptionsMap*>                                                           | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `imageUrlMap`                                                                                                                            | Record<string, *string*>                                                                                                                 | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `name`                                                                                                                                   | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `path`                                                                                                                                   | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `hideOperators`                                                                                                                          | *operations.PostV2TracesSessionsCountFiltersRequestHideOperators*[]                                                                      | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |