# ModelFusionSetEnabledRequest

## Example Usage

```typescript
import { ModelFusionSetEnabledRequest } from "@orq-ai/node/models/operations";

let value: ModelFusionSetEnabledRequest = {
  modelFusionId: "<id>",
  setModelFusionEnabledRequest: {
    enabled: false,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `modelFusionId`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `setModelFusionEnabledRequest`                                                                     | [components.SetModelFusionEnabledRequest](../../models/components/setmodelfusionenabledrequest.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |