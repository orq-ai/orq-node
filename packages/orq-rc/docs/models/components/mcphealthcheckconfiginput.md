# McpHealthCheckConfigInput

## Example Usage

```typescript
import { McpHealthCheckConfigInput } from "@orq-ai/node/models/components";

let value: McpHealthCheckConfigInput = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `enabled`                                                                                        | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `interval`                                                                                       | *string*                                                                                         | :heavy_minus_sign:                                                                               | Empty follows the plan default; the plan sets the minimum.                                       |
| `notifierIds`                                                                                    | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | Workspace notifiers told when the server becomes unhealthy or recovers.                          |
| `recoveryPeriod`                                                                                 | *string*                                                                                         | :heavy_minus_sign:                                                                               | How long an unhealthy server must pass checks before it counts as recovered; empty is 3 minutes. |