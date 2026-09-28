# CompactResponseResponseBody

Compaction completed successfully.

## Example Usage

```typescript
import { CompactResponseResponseBody } from "@orq-ai/node/models/operations";

let value: CompactResponseResponseBody = {
  createdAt: 422513,
  id: "<id>",
  object: "response.compaction",
  output: [],
  usage: {
    inputTokens: 276387,
    inputTokensDetails: {
      cacheCreationTokens: 49885,
      cacheWriteTokens: 905586,
      cachedTokens: 432413,
    },
    outputTokens: 725695,
    outputTokensDetails: {
      reasoningTokens: 91824,
    },
    totalTokens: 938481,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `createdAt`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | Unix timestamp (seconds) when the response was created.                              |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | The ID of the compaction response.                                                   |
| `object`                                                                             | [operations.CompactResponseObject](../../models/operations/compactresponseobject.md) | :heavy_check_mark:                                                                   | Always "response.compaction".                                                        |
| `output`                                                                             | [components.PublicCompactionItem](../../models/components/publiccompactionitem.md)[] | :heavy_check_mark:                                                                   | The compacted list of output items.                                                  |
| `usage`                                                                              | [components.PublicUsage](../../models/components/publicusage.md)                     | :heavy_check_mark:                                                                   | N/A                                                                                  |