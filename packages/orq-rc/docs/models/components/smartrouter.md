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

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `smartRouterId`                                                                                                     | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Unique identifier assigned to the Smart Router.                                                                     |
| `key`                                                                                                               | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Immutable lowercase key that identifies the Smart Router within the workspace.                                      |
| `modelRef`                                                                                                          | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Immutable workspace-qualified model reference to use in AI Gateway requests, in `<workspace-key>@orq/<key>` format. |
| `models`                                                                                                            | *string*[]                                                                                                          | :heavy_check_mark:                                                                                                  | Pool of 2 to 50 distinct eligible models. Each value uses `provider/model` format.                                  |
| `profile`                                                                                                           | [components.SmartRouterProfile](../../models/components/smartrouterprofile.md)                                      | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `enabled`                                                                                                           | *boolean*                                                                                                           | :heavy_check_mark:                                                                                                  | Whether the Smart Router can be used in AI Gateway requests.                                                        |
| `createdAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_check_mark:                                                                                                  | Date and time when the Smart Router was created.                                                                    |
| `updatedAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_check_mark:                                                                                                  | Date and time when the Smart Router was last updated.                                                               |