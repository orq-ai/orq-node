# CreateChatCompletionAgenticRagConfig

Override the agentic RAG configuration for this search. If not provided, will use the knowledge base configured agentic RAG settings.

## Example Usage

```typescript
import { CreateChatCompletionAgenticRagConfig } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionAgenticRagConfig = {
  modelDbId: "<id>",
  provider: "togetherai",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `modelDbId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `provider`                                                                                                   | [operations.CreateChatCompletionProxyProvider](../../models/operations/createchatcompletionproxyprovider.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `integrationId`                                                                                              | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |