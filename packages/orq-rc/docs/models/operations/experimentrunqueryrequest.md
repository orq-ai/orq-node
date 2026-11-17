# ExperimentRunQueryRequest

## Example Usage

```typescript
import { ExperimentRunQueryRequest } from "@orq-ai/node/models/operations";

let value: ExperimentRunQueryRequest = {
  experimentId: "<id>",
  runId: "<id>",
  queryRunRequest: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `experimentId`                                                           | *string*                                                                 | :heavy_check_mark:                                                       | ID of the experiment.                                                    |
| `runId`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | ID of the run.                                                           |
| `queryRunRequest`                                                        | [components.QueryRunRequest](../../models/components/queryrunrequest.md) | :heavy_check_mark:                                                       | N/A                                                                      |