# CreateRouterResponseResponse


## Supported Types

### `operations.CreateRouterResponseResponseBody`

```typescript
const value: operations.CreateRouterResponseResponseBody = {
  background: false,
  completedAt: 330587,
  createdAt: 47938,
  error: {
    code: "<value>",
    message: "<value>",
  },
  frequencyPenalty: 2674.08,
  id: "<id>",
  incompleteDetails: {
    reason: "<value>",
  },
  instructions: "<value>",
  maxOutputTokens: 942879,
  maxToolCalls: 873699,
  metadata: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  model: "Prius",
  object: "<value>",
  output: [],
  parallelToolCalls: true,
  presencePenalty: 7643.11,
  previousResponseId: "<id>",
  promptCacheKey: "<value>",
  promptCacheOptions: null,
  promptCacheRetention: "<value>",
  reasoning: {},
  safetyIdentifier: "<value>",
  serviceTier: "fast",
  status: "queued",
  store: false,
  temperature: 3140.67,
  text: "<value>",
  toolChoice: "<value>",
  tools: [
    "<value 1>",
  ],
  topLogprobs: 228365,
  topP: 6709.08,
  truncation: "disabled",
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
  user: "Paige.Reynolds",
};
```

### `EventStream<operations.CreateRouterResponseResponsesResponseBody>`

