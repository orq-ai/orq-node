# ExperimentRunExecuteRequest

## Example Usage

```typescript
import { ExperimentRunExecuteRequest } from "@orq-ai/node/models/operations";

let value: ExperimentRunExecuteRequest = {
  experimentId: "<id>",
  runId: "<id>",
  executeRunRequest: {
    scope: "EXECUTE_SCOPE_COLUMN",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `experimentId`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | ID of the experiment.                                                        |
| `runId`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | ID of the run.                                                               |
| `executeRunRequest`                                                          | [components.ExecuteRunRequest](../../models/components/executerunrequest.md) | :heavy_check_mark:                                                           | N/A                                                                          |