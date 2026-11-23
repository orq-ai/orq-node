# CellStatusCounts

Number of cells in each status, across every row and column of the run,
 dataset and annotation cells included.

## Example Usage

```typescript
import { CellStatusCounts } from "@orq-ai/node/models/components";

let value: CellStatusCounts = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `notRun`                                                          | *number*                                                          | :heavy_minus_sign:                                                | Cells that have never executed, including cells without a status. |
| `queued`                                                          | *number*                                                          | :heavy_minus_sign:                                                | Cells waiting to execute.                                         |
| `running`                                                         | *number*                                                          | :heavy_minus_sign:                                                | Cells executing now.                                              |
| `completed`                                                       | *number*                                                          | :heavy_minus_sign:                                                | Cells that finished successfully.                                 |
| `failed`                                                          | *number*                                                          | :heavy_minus_sign:                                                | Cells whose execution failed.                                     |
| `canceled`                                                        | *number*                                                          | :heavy_minus_sign:                                                | Cells canceled before they finished.                              |