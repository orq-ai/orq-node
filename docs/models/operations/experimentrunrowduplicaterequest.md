# ExperimentRunRowDuplicateRequest

## Example Usage

```typescript
import { ExperimentRunRowDuplicateRequest } from "@orq-ai/node/models/operations";

let value: ExperimentRunRowDuplicateRequest = {
  experimentId: "<id>",
  runId: "<id>",
  rowId: "<id>",
  duplicateRowRequest: {},
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `experimentId`                                                                   | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `runId`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `rowId`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `duplicateRowRequest`                                                            | [components.DuplicateRowRequest](../../models/components/duplicaterowrequest.md) | :heavy_check_mark:                                                               | N/A                                                                              |