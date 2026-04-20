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
  frequencyPenalty: 8791.28,
  id: "<id>",
  incompleteDetails: {
    reason: "<value>",
  },
  input: [
    "<value 1>",
    "<value 2>",
  ],
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
  promptCacheRetention: null,
  reasoning: {},
  safetyIdentifier: "<value>",
  serviceTier: "flex",
  status: "queued",
  store: true,
  temperature: 1113.75,
  text: "<value>",
  toolChoice: "<value>",
  tools: [
    "<value 1>",
  ],
  topLogprobs: 399715,
  topP: 3507.41,
  truncation: "disabled",
  usage: {
    inputTokens: 670908,
    inputTokensDetails: {
      cacheCreationTokens: 221916,
      cachedTokens: 959224,
    },
    outputTokens: 349676,
    outputTokensDetails: {
      reasoningTokens: 786005,
    },
    totalTokens: 763695,
  },
  user: "Garry8",
};
```

### `EventStream<operations.CreateRouterResponseResponsesResponseBody>`

