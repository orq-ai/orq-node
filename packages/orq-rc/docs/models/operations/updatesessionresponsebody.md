# UpdateSessionResponseBody

Session

## Example Usage

```typescript
import { UpdateSessionResponseBody } from "@orq-ai/node/models/operations";

let value: UpdateSessionResponseBody = {
  id: "<id>",
  externalId: "<id>",
  duration: 5045.15,
  contactIds: [
    "<value>",
  ],
  billing: {
    inputCost: 5555.25,
    outputCost: 4733.47,
    totalCost: 1894.97,
  },
  usage: {
    promptTokens: 6845.06,
    completionTokens: 3268.46,
    totalTokens: 2326.57,
  },
  tracesCount: 9869.92,
  tags: [
    "<value>",
  ],
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `externalId`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `duration`                                                                                         | *number*                                                                                           | :heavy_check_mark:                                                                                 | Duration of the session in ms                                                                      |
| `contactIds`                                                                                       | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | List of contact ids                                                                                |
| `billing`                                                                                          | [operations.UpdateSessionSessionsBilling](../../models/operations/updatesessionsessionsbilling.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `usage`                                                                                            | [operations.UpdateSessionSessionsUsage](../../models/operations/updatesessionsessionsusage.md)     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `tracesCount`                                                                                      | *number*                                                                                           | :heavy_check_mark:                                                                                 | Total traces of the session                                                                        |
| `tags`                                                                                             | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `workspaceId`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The workspace id                                                                                   |
| `projectId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The project id                                                                                     |
| `startedAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | The time when the session was created                                                              |
| `updatedAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | The time when the session was updated                                                              |