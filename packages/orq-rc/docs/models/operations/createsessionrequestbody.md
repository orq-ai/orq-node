# CreateSessionRequestBody

## Example Usage

```typescript
import { CreateSessionRequestBody } from "@orq-ai/node/models/operations";

let value: CreateSessionRequestBody = {
  externalId: "<id>",
  duration: 789.62,
  contactIds: [
    "<value>",
  ],
  billing: {
    inputCost: 400.03,
    outputCost: 5357.48,
    totalCost: 2072.38,
  },
  usage: {
    promptTokens: 4574.01,
    completionTokens: 1378.73,
    totalTokens: 7450.28,
  },
  tracesCount: 2974.44,
  tags: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `externalId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `duration`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | Duration of the session in ms                                                                 |
| `contactIds`                                                                                  | *string*[]                                                                                    | :heavy_check_mark:                                                                            | List of contact ids                                                                           |
| `billing`                                                                                     | [operations.Billing](../../models/operations/billing.md)                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `usage`                                                                                       | [operations.CreateSessionUsage](../../models/operations/createsessionusage.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tracesCount`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | Total traces of the session                                                                   |
| `tags`                                                                                        | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The project id                                                                                |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time when the session was created                                                         |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time when the session was updated                                                         |