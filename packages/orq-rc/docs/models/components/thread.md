# Thread

## Example Usage

```typescript
import { Thread } from "@orq-ai/node/models/components";

let value: Thread = {
  id: "<id>",
  externalId: "<id>",
  duration: 7106.37,
  contactIds: [
    "<value 1>",
    "<value 2>",
  ],
  billing: {
    inputCost: 2643.66,
    outputCost: 3620.73,
    totalCost: 5653.41,
  },
  usage: {
    promptTokens: 537005,
    completionTokens: 317406,
    totalTokens: 621333,
  },
  tracesCount: 970364,
  tags: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Internal thread record ID.                                                                    |
| `externalId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Client-provided thread identifier used to group related traces.                               |
| `duration`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | Total thread duration in milliseconds.                                                        |
| `contactIds`                                                                                  | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Contact IDs associated with the thread.                                                       |
| `billing`                                                                                     | [components.ThreadBilling](../../models/components/threadbilling.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `usage`                                                                                       | [components.ThreadUsage](../../models/components/threadusage.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tracesCount`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of traces associated with the thread.                                                  |
| `tags`                                                                                        | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Tags used to categorize the thread.                                                           |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Display title. Does not replace external_id and is not used to group traces.                  |
| `client`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Originating coding assistant or client, such as claude-code, cursor, or codex.                |
| `repo`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Canonical git repository for a coding-agent thread, such as github.com/org/repo.              |
| `kind`                                                                                        | [components.ThreadKind](../../models/components/threadkind.md)                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |