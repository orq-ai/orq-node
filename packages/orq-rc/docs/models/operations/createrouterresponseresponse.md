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
  input: [
    "<value 1>",
    "<value 2>",
  ],
  instructions: "<value>",
  maxOutputTokens: 873699,
  maxToolCalls: 800452,
  metadata: {
    "key": "<value>",
  },
  model: "Aventador",
  object: "<value>",
  output: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  parallelToolCalls: true,
  presencePenalty: 5582.27,
  previousResponseId: null,
  promptCacheKey: "<value>",
  promptCacheOptions: {},
  promptCacheRetention: "<value>",
  reasoning: {},
  safetyIdentifier: "<value>",
  serviceTier: "fast",
  status: "in_progress",
  store: true,
  temperature: 3507.41,
  text: "<value>",
  toolChoice: "<value>",
  tools: [
    "<value 1>",
    "<value 2>",
  ],
  topLogprobs: 221916,
  topP: 9592.24,
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
  user: "Mossie.Heller84",
};
```

### `EventStream<operations.CreateRouterResponseResponsesResponseBody>`

