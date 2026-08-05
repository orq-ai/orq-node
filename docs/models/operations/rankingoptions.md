# RankingOptions

Options for ranking search results

## Example Usage

```typescript
import { RankingOptions } from "@orq-ai/node/models/operations";

let value: RankingOptions = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `ranker`                                               | [operations.Ranker](../../models/operations/ranker.md) | :heavy_minus_sign:                                     | The ranking algorithm                                  |
| `scoreThreshold`                                       | *number*                                               | :heavy_minus_sign:                                     | Minimum relevance score                                |