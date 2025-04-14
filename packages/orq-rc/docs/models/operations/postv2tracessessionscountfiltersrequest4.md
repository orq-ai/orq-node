# PostV2TracesSessionsCountFiltersRequest4

## Example Usage

```typescript
import { PostV2TracesSessionsCountFiltersRequest4 } from "@orq-ai/node/models/operations";

let value: PostV2TracesSessionsCountFiltersRequest4 = {
  type: "string_array",
  operator: "in",
  values: [
    "<value>",
  ],
  path: "/var/tmp",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                           | [operations.PostV2TracesSessionsCountFiltersRequestRequestBody4Type](../../models/operations/postv2tracessessionscountfiltersrequestrequestbody4type.md)         | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `operator`                                                                                                                                                       | [operations.PostV2TracesSessionsCountFiltersRequestRequestBody4Operator](../../models/operations/postv2tracessessionscountfiltersrequestrequestbody4operator.md) | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `values`                                                                                                                                                         | *string*[]                                                                                                                                                       | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `path`                                                                                                                                                           | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |