# CreateThreadRequest

## Example Usage

```typescript
import { CreateThreadRequest } from "@orq-ai/node/models/components";

let value: CreateThreadRequest = {
  externalId: "<id>",
  duration: 7463.93,
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
  tracesCount: 524552,
  tags: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `externalId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `duration`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `contactIds`                                                                                  | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `billing`                                                                                     | [components.ThreadBilling](../../models/components/threadbilling.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `usage`                                                                                       | [components.ThreadUsage](../../models/components/threadusage.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tracesCount`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tags`                                                                                        | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `client`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `repo`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `kind`                                                                                        | [components.ThreadKind](../../models/components/threadkind.md)                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |