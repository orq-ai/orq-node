# ExperimentRunUpdateRequest

## Example Usage

```typescript
import { ExperimentRunUpdateRequest } from "@orq-ai/node/models/operations";

let value: ExperimentRunUpdateRequest = {
  experimentId: "<id>",
  runId: "<id>",
  updateRunRequest: {},
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `experimentId`                                                             | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `runId`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `updateRunRequest`                                                         | [components.UpdateRunRequest](../../models/components/updaterunrequest.md) | :heavy_check_mark:                                                         | N/A                                                                        |