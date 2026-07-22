# SmartRouter

## Example Usage

```typescript
import { SmartRouter } from "@orq-ai/node/models/components";

let value: SmartRouter = {
  smartRouterId: "<id>",
  key: "<key>",
  modelRef: "<value>",
  models: [],
  profile: "SMART_ROUTER_PROFILE_UNSPECIFIED",
  enabled: true,
  createdAt: new Date("2025-05-21T03:19:23.758Z"),
  updatedAt: new Date("2024-11-21T02:46:58.049Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `smartRouterId`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique Smart Router identifier assigned by ORQ.                                               |
| `key`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | Stable lowercase key used in the gateway model reference.                                     |
| `modelRef`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Workspace-qualified gateway model reference.                                                  |
| `models`                                                                                      | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Ordered model pool in provider/model format, from highest to lowest capability.               |
| `profile`                                                                                     | [components.SmartRouterProfile](../../models/components/smartrouterprofile.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the router is available to gateway requests.                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |