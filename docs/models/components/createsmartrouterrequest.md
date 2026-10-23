# CreateSmartRouterRequest

## Example Usage

```typescript
import { CreateSmartRouterRequest } from "@orq-ai/node/models/components";

let value: CreateSmartRouterRequest = {
  key: "<key>",
  models: [],
  profile: "SMART_ROUTER_PROFILE_QUALITY",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `key`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | Unique key for the Smart Router within the workspace. Use lowercase letters, numbers, and hyphens. |
| `models`                                                                                           | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | Pool of 2 to 50 distinct eligible models. Each value uses `provider/model` format.                 |
| `profile`                                                                                          | [components.SmartRouterProfile](../../models/components/smartrouterprofile.md)                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |