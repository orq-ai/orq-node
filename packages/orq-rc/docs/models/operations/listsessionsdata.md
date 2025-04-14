# ListSessionsData

## Example Usage

```typescript
import { ListSessionsData } from "@orq-ai/node/models/operations";

let value: ListSessionsData = {
  id: "<id>",
  externalId: "<id>",
  duration: 40.17,
  contactIds: [
    "<value>",
  ],
  billing: {
    inputCost: 9955.41,
    outputCost: 4126.79,
    totalCost: 2303.59,
  },
  usage: {
    promptTokens: 7381.42,
    completionTokens: 7444.63,
    totalTokens: 5958.51,
  },
  tracesCount: 3054.14,
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
| `billing`                                                                                     | [operations.ListSessionsBilling](../../models/operations/listsessionsbilling.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `usage`                                                                                       | [operations.ListSessionsUsage](../../models/operations/listsessionsusage.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tracesCount`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | Total traces of the session                                                                   |
| `tags`                                                                                        | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The workspace id                                                                              |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The project id                                                                                |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time when the session was created                                                         |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time when the session was updated                                                         |