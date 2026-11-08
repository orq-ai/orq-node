# CreateExperimentRequest

## Example Usage

```typescript
import { CreateExperimentRequest } from "@orq-ai/node/models/components";

let value: CreateExperimentRequest = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `displayName`                                                                                                 | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `projectId`                                                                                                   | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Project the experiment is created in; defaults to the API key's project when omitted.                         |
| `datasetId`                                                                                                   | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `datasetVersionId`                                                                                            | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `sourceRun`                                                                                                   | [components.RunRef](../../models/components/runref.md)                                                        | :heavy_minus_sign:                                                                                            | Copies the task, evaluator and review columns of an existing run into the<br/> new experiment's first run (fork). |