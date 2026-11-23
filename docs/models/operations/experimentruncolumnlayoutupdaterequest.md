# ExperimentRunColumnLayoutUpdateRequest

## Example Usage

```typescript
import { ExperimentRunColumnLayoutUpdateRequest } from "@orq-ai/node/models/operations";

let value: ExperimentRunColumnLayoutUpdateRequest = {
  experimentId: "<id>",
  runId: "<id>",
  updateRunColumnLayoutRequest: {
    columns: [
      {
        columnId: "<id>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `experimentId`                                                                                     | *string*                                                                                           | :heavy_check_mark:                                                                                 | ID of the experiment.                                                                              |
| `runId`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | ID of the run.                                                                                     |
| `updateRunColumnLayoutRequest`                                                                     | [components.UpdateRunColumnLayoutRequest](../../models/components/updateruncolumnlayoutrequest.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |