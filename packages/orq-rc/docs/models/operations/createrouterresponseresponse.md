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
    {
      "call_id": "<id>",
      "type": "function_call_output",
    },
  ],
  parallelToolCalls: false,
  presencePenalty: 592.22,
  previousResponseId: "<id>",
  promptCacheKey: "<value>",
  promptCacheOptions: {},
  promptCacheRetention: "<value>",
  reasoning: {},
  safetyIdentifier: "<value>",
  serviceTier: "flex",
  status: "completed",
  store: true,
  temperature: 2283.65,
  text: "<value>",
  toolChoice: "<value>",
  tools: [],
  topLogprobs: 959224,
  topP: 3496.76,
  truncation: "auto",
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
  user: "Garry8",
};
```

### `EventStream<operations.CreateRouterResponseResponsesResponseBody>`

