# ExperimentRunExecuteRequest

## Example Usage

```typescript
import { ExperimentRunExecuteRequest } from "@orq-ai/node/models/operations";

let value: ExperimentRunExecuteRequest = {
  experimentId: "<id>",
  runId: "<id>",
  executeRunRequest: {},
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `experimentId`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `runId`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `executeRunRequest`                                                          | [components.ExecuteRunRequest](../../models/components/executerunrequest.md) | :heavy_check_mark:                                                           | N/A                                                                          |