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
    inputTokens: 763695,
    inputTokensDetails: {
      cacheCreationTokens: 732588,
      cacheWriteTokens: 376439,
      cachedTokens: 349904,
    },
    outputTokens: 437223,
    outputTokensDetails: {
      reasoningTokens: 846277,
    },
    totalTokens: 81544,
  },
  user: "Camden39",
};
```

### `EventStream<operations.CreateRouterResponseResponsesResponseBody>`

