# ExperimentAnnotationCreateRequest

## Example Usage

```typescript
import { ExperimentAnnotationCreateRequest } from "@orq-ai/node/models/operations";

let value: ExperimentAnnotationCreateRequest = {
  experimentId: "<id>",
  runId: "<id>",
  createAnnotationColumnRequest: {
    annotationId: "<id>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `experimentId`                                                                                       | *string*                                                                                             | :heavy_check_mark:                                                                                   | ID of the experiment.                                                                                |
| `runId`                                                                                              | *string*                                                                                             | :heavy_check_mark:                                                                                   | ID of the run.                                                                                       |
| `createAnnotationColumnRequest`                                                                      | [components.CreateAnnotationColumnRequest](../../models/components/createannotationcolumnrequest.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |