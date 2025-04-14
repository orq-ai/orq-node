# PostV2TracesSessionsCountFilters1

## Example Usage

```typescript
import { PostV2TracesSessionsCountFilters1 } from "@orq-ai/node/models/operations";

let value: PostV2TracesSessionsCountFilters1 = {
  operator: "is_empty",
  type: "number",
  options: [
    "<value>",
  ],
  name: "<value>",
  path: "/lib",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `operator`                                                                                                                 | [operations.PostV2TracesSessionsCountFiltersOperator](../../models/operations/postv2tracessessionscountfiltersoperator.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `value`                                                                                                                    | *any*                                                                                                                      | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `type`                                                                                                                     | [operations.PostV2TracesSessionsCountFiltersType](../../models/operations/postv2tracessessionscountfilterstype.md)         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `options`                                                                                                                  | *operations.PostV2TracesSessionsCountFiltersOptions*[]                                                                     | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `optionsMap`                                                                                                               | Record<string, *operations.PostV2TracesSessionsCountFiltersOptionsMap*>                                                    | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `imageUrlMap`                                                                                                              | Record<string, *string*>                                                                                                   | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `name`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `path`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `hideOperators`                                                                                                            | *operations.PostV2TracesSessionsCountFiltersHideOperators*[]                                                               | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |