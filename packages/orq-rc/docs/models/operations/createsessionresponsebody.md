# CreateSessionResponseBody

Session created

## Example Usage

```typescript
import { CreateSessionResponseBody } from "@orq-ai/node/models/operations";

let value: CreateSessionResponseBody = {
  id: "<id>",
  externalId: "<id>",
  duration: 6933.34,
  contactIds: [
    "<value>",
  ],
  billing: {
    inputCost: 5381.65,
    outputCost: 1890.96,
    totalCost: 375.37,
  },
  usage: {
    promptTokens: 2485.6,
    completionTokens: 8301.97,
    totalTokens: 9741.68,
  },
  tracesCount: 8625.61,
  tags: [
    "<value>",
  ],
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `externalId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `duration`                                                                                     | *number*                                                                                       | :heavy_check_mark:                                                                             | Duration of the session in ms                                                                  |
| `contactIds`                                                                                   | *string*[]                                                                                     | :heavy_check_mark:                                                                             | List of contact ids                                                                            |
| `billing`                                                                                      | [operations.CreateSessionBilling](../../models/operations/createsessionbilling.md)             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `usage`                                                                                        | [operations.CreateSessionSessionsUsage](../../models/operations/createsessionsessionsusage.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `tracesCount`                                                                                  | *number*                                                                                       | :heavy_check_mark:                                                                             | Total traces of the session                                                                    |
| `tags`                                                                                         | *string*[]                                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `workspaceId`                                                                                  | *string*                                                                                       | :heavy_check_mark:                                                                             | The workspace id                                                                               |
| `projectId`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | The project id                                                                                 |
| `startedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | The time when the session was created                                                          |
| `updatedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_minus_sign:                                                                             | The time when the session was updated                                                          |