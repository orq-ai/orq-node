# ExperimentTaskCreateRequest

## Example Usage

```typescript
import { ExperimentTaskCreateRequest } from "@orq-ai/node/models/operations";

let value: ExperimentTaskCreateRequest = {
  experimentId: "<id>",
  runId: "<id>",
  createTaskColumnRequest: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `experimentId`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `runId`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createTaskColumnRequest`                                                                | [components.CreateTaskColumnRequest](../../models/components/createtaskcolumnrequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |