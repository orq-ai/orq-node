# ExperimentRunCancelRequest

## Example Usage

```typescript
import { ExperimentRunCancelRequest } from "@orq-ai/node/models/operations";

let value: ExperimentRunCancelRequest = {
  experimentId: "<id>",
  runId: "<id>",
  cancelExperimentRunRequest: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `experimentId`                                                                                 | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of the experiment.                                                                          |
| `runId`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | ID of the run.                                                                                 |
| `cancelExperimentRunRequest`                                                                   | [components.CancelExperimentRunRequest](../../models/components/cancelexperimentrunrequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |