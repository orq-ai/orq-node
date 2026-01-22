# CreateResponseTools3

Configuration for file search tool

## Example Usage

```typescript
import { CreateResponseTools3 } from "@orq-ai/node/models/operations";

let value: CreateResponseTools3 = {
  type: "file_search",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | *"file_search"*                                                                  | :heavy_check_mark:                                                               | The type of tool                                                                 |
| `vectorStoreIds`                                                                 | *string*[]                                                                       | :heavy_minus_sign:                                                               | The vector stores to search                                                      |
| `maxNumResults`                                                                  | *number*                                                                         | :heavy_minus_sign:                                                               | Maximum number of results to return                                              |
| `filters`                                                                        | *any*                                                                            | :heavy_minus_sign:                                                               | Filters to apply to the search                                                   |
| `rankingOptions`                                                                 | [operations.ToolsRankingOptions](../../models/operations/toolsrankingoptions.md) | :heavy_minus_sign:                                                               | Options for ranking search results                                               |