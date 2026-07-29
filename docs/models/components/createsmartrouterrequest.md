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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `key`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | Required. Stable lowercase key containing letters, numbers, and hyphens.       |
| `models`                                                                       | *string*[]                                                                     | :heavy_check_mark:                                                             | Required. Ordered pool of distinct models in provider/model format.            |
| `profile`                                                                      | [components.SmartRouterProfile](../../models/components/smartrouterprofile.md) | :heavy_check_mark:                                                             | N/A                                                                            |