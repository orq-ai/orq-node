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
  promptCacheRetention: "<value>",
  reasoning: {},
  safetyIdentifier: "<value>",
  serviceTier: "auto",
  status: "failed",
  store: true,
  temperature: 3997.15,
  text: "<value>",
  toolChoice: "<value>",
  tools: [],
  topLogprobs: 670908,
  topP: 2219.16,
  truncation: "auto",
  usage: {
    inputTokens: 555125,
    inputTokensDetails: {
      cacheCreationTokens: 520588,
      cachedTokens: 732049,
    },
    outputTokens: 15634,
    outputTokensDetails: {
      reasoningTokens: 572043,
    },
    totalTokens: 110886,
  },
  user: "Paige.Reynolds",
};
```

### `EventStream<operations.CreateRouterResponseResponsesResponseBody>`

