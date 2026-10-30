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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `experimentId`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `runId`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `format`                                                                   | [operations.QueryParamFormat](../../models/operations/queryparamformat.md) | :heavy_minus_sign:                                                         | N/A                                                                        |