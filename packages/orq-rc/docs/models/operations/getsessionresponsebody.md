# GetSessionResponseBody

Session

## Example Usage

```typescript
import { GetSessionResponseBody } from "@orq-ai/node/models/operations";

let value: GetSessionResponseBody = {
  id: "<id>",
  externalId: "<id>",
  duration: 1009.44,
  contactIds: [
    "<value>",
  ],
  billing: {
    inputCost: 7683.25,
    outputCost: 3996.32,
    totalCost: 2465.75,
  },
  usage: {
    promptTokens: 2688.21,
    completionTokens: 6565.79,
    totalTokens: 3426.61,
  },
  tracesCount: 3700,
  tags: [
    "<value>",
  ],
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `externalId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `duration`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | Duration of the session in ms                                                                 |
| `contactIds`                                                                                  | *string*[]                                                                                    | :heavy_check_mark:                                                                            | List of contact ids                                                                           |
| `billing`                                                                                     | [operations.GetSessionBilling](../../models/operations/getsessionbilling.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `usage`                                                                                       | [operations.GetSessionUsage](../../models/operations/getsessionusage.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tracesCount`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | Total traces of the session                                                                   |
| `tags`                                                                                        | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The workspace id                                                                              |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The project id                                                                                |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time when the session was created                                                         |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time when the session was updated                                                         |