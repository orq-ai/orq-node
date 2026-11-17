# ExperimentTaskCreateRequest

## Example Usage

```typescript
import { ExperimentTaskCreateRequest } from "@orq-ai/node/models/operations";

let value: ExperimentTaskCreateRequest = {
  experimentId: "<id>",
  runId: "<id>",
  createTaskColumnRequest: {
    displayName: "Alene_Treutel",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `experimentId`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | ID of the experiment.                                                                    |
| `runId`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | ID of the run.                                                                           |
| `createTaskColumnRequest`                                                                | [components.CreateTaskColumnRequest](../../models/components/createtaskcolumnrequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |