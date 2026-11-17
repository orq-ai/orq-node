# ExperimentRunExportRequest

## Example Usage

```typescript
import { ExperimentRunExportRequest } from "@orq-ai/node/models/operations";

let value: ExperimentRunExportRequest = {
  experimentId: "<id>",
  runId: "<id>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `experimentId`                                                                                                             | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | ID of the experiment.                                                                                                      |
| `runId`                                                                                                                    | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | ID of the run.                                                                                                             |
| `format`                                                                                                                   | [operations.QueryParamFormat](../../models/operations/queryparamformat.md)                                                 | :heavy_minus_sign:                                                                                                         | File format: `json` (an array of records), `jsonl` (one record per line) or `csv`. Each record is one row and task column. |