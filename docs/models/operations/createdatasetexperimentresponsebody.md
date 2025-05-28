# CreateDatasetExperimentResponseBody

Experiment created

## Example Usage

```typescript
import { CreateDatasetExperimentResponseBody } from "@orq-ai/node/models/operations";

let value: CreateDatasetExperimentResponseBody = {
  url: "https://nocturnal-suitcase.com",
  experimentId: "<id>",
  experimentRunId: "<id>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `url`                                               | *string*                                            | :heavy_check_mark:                                  | The url of the experiment run that was just created |
| `experimentId`                                      | *string*                                            | :heavy_check_mark:                                  | The unique identifier of the experiment             |
| `experimentRunId`                                   | *string*                                            | :heavy_check_mark:                                  | The unique identifier of the experiment run         |