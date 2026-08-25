# DatasourcesServiceGetProcessingStatusResponse

## Example Usage

```typescript
import { DatasourcesServiceGetProcessingStatusResponse } from "@orq-ai/node/models/components";

let value: DatasourcesServiceGetProcessingStatusResponse = {
  totalQueued: 1668.8,
  totalCompleted: 9072.53,
  totalPassed: 1599.6,
  totalFailed: 5260.61,
  overallTotalProcessing: 261.43,
  chunksProcessingAttempts: [],
  datasourceProcessingAttempts: [
    {
      id: "<id>",
      startedAt: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `totalQueued`                                                                              | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `totalCompleted`                                                                           | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `totalPassed`                                                                              | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `totalFailed`                                                                              | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `overallTotalProcessing`                                                                   | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `chunksProcessingAttempts`                                                                 | [components.ChunkProcessingAttempts](../../models/components/chunkprocessingattempts.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `datasourceProcessingAttempts`                                                             | [components.ProcessingAttempt](../../models/components/processingattempt.md)[]             | :heavy_check_mark:                                                                         | N/A                                                                                        |