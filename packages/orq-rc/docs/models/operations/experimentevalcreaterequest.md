# ExperimentEvalCreateRequest

## Example Usage

```typescript
import { ExperimentEvalCreateRequest } from "@orq-ai/node/models/operations";

let value: ExperimentEvalCreateRequest = {
  experimentId: "<id>",
  runId: "<id>",
  createEvalColumnRequest: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `experimentId`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `runId`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createEvalColumnRequest`                                                                | [components.CreateEvalColumnRequest](../../models/components/createevalcolumnrequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |