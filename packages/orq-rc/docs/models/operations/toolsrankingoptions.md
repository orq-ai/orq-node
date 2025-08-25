# ToolsRankingOptions

Options for ranking search results

## Example Usage

```typescript
import { ToolsRankingOptions } from "@orq-ai/node/models/operations";

let value: ToolsRankingOptions = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `ranker`                                                         | [operations.ToolsRanker](../../models/operations/toolsranker.md) | :heavy_minus_sign:                                               | The ranking algorithm                                            |
| `scoreThreshold`                                                 | *number*                                                         | :heavy_minus_sign:                                               | Minimum relevance score                                          |