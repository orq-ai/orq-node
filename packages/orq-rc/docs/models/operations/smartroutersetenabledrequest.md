# SmartRouterSetEnabledRequest

## Example Usage

```typescript
import { SmartRouterSetEnabledRequest } from "@orq-ai/node/models/operations";

let value: SmartRouterSetEnabledRequest = {
  smartRouterId: "<id>",
  setSmartRouterEnabledRequest: {
    enabled: true,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `smartRouterId`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `setSmartRouterEnabledRequest`                                                                     | [components.SetSmartRouterEnabledRequest](../../models/components/setsmartrouterenabledrequest.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |