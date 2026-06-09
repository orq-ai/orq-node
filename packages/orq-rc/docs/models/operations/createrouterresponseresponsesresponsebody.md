# CreateRouterResponseResponsesResponseBody

A server-sent event in the response stream. The frame's `event` field selects the payload shape carried in `data`.


## Supported Types

### `components.ResponseErrorStreamEvent`

```typescript
const value: components.ResponseErrorStreamEvent = {
  data: {
    error: {
      code: "<value>",
      message: "<value>",
    },
    sequenceNumber: 122768,
    type: "error",
  },
  event: "error",
};
```

### `components.ResponseHostedToolCallStreamEvent`

```typescript
const value: components.ResponseHostedToolCallStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 910645,
    sequenceNumber: 43802,
    type: "response.mcp_call.in_progress",
  },
  event: "response.web_search_call.searching",
};
```

### `components.ResponseHostedToolCallStreamEvent`

```typescript
const value: components.ResponseHostedToolCallStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 910645,
    sequenceNumber: 43802,
    type: "response.mcp_call.in_progress",
  },
  event: "response.web_search_call.searching",
};
```

### `components.ResponseHostedToolCallStreamEvent`

```typescript
const value: components.ResponseHostedToolCallStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 910645,
    sequenceNumber: 43802,
    type: "response.mcp_call.in_progress",
  },
  event: "response.web_search_call.searching",
};
```

### `components.ResponseCodeInterpreterCodeDeltaStreamEvent`

```typescript
const value: components.ResponseCodeInterpreterCodeDeltaStreamEvent = {
  data: {
    delta: "<value>",
    itemId: "<id>",
    outputIndex: 613084,
    sequenceNumber: 833513,
    type: "response.code_interpreter_call_code.delta",
  },
  event: "response.code_interpreter_call_code.delta",
};
```

### `components.ResponseCodeInterpreterCodeDoneStreamEvent`

```typescript
const value: components.ResponseCodeInterpreterCodeDoneStreamEvent = {
  data: {
    code: "<value>",
    itemId: "<id>",
    outputIndex: 12468,
    sequenceNumber: 811140,
    type: "response.code_interpreter_call_code.done",
  },
  event: "response.code_interpreter_call_code.done",
};
```

### `components.ResponseLifecycleStreamEvent`

```typescript
const value: components.ResponseLifecycleStreamEvent = {
  data: {
    response: {
      background: false,
      completedAt: 916607,
      createdAt: 477912,
      error: {
        code: "<value>",
        message: "<value>",
      },
      frequencyPenalty: 9108.44,
      id: "<id>",
      incompleteDetails: {
        reason: "<value>",
      },
      input: [],
      instructions: "<value>",
      maxOutputTokens: 743646,
      maxToolCalls: 932864,
      metadata: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      model: "Camry",
      object: "<value>",
      output: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      parallelToolCalls: true,
      presencePenalty: 2212.63,
      previousResponseId: "<id>",
      promptCacheKey: "<value>",
      promptCacheRetention: "<value>",
      reasoning: {},
      safetyIdentifier: "<value>",
      serviceTier: "priority",
      status: "queued",
      store: true,
      temperature: 60.72,
      text: "<value>",
      toolChoice: "<value>",
      tools: [
        "<value 1>",
        "<value 2>",
      ],
      topLogprobs: 687370,
      topP: 4456.14,
      truncation: "disabled",
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
      user: null,
    },
    sequenceNumber: 784919,
    type: "response.incomplete",
  },
  event: "response.in_progress",
};
```

### `components.ResponseContentPartStreamEvent`

```typescript
const value: components.ResponseContentPartStreamEvent = {
  data: {
    contentIndex: 142603,
    itemId: "<id>",
    outputIndex: 32631,
    part: {},
    sequenceNumber: 44653,
    type: "response.content_part.done",
  },
  event: "response.content_part.added",
};
```

### `components.ResponseContentPartStreamEvent`

```typescript
const value: components.ResponseContentPartStreamEvent = {
  data: {
    contentIndex: 142603,
    itemId: "<id>",
    outputIndex: 32631,
    part: {},
    sequenceNumber: 44653,
    type: "response.content_part.done",
  },
  event: "response.content_part.added",
};
```

### `components.ResponseLifecycleStreamEvent`

```typescript
const value: components.ResponseLifecycleStreamEvent = {
  data: {
    response: {
      background: false,
      completedAt: 916607,
      createdAt: 477912,
      error: {
        code: "<value>",
        message: "<value>",
      },
      frequencyPenalty: 9108.44,
      id: "<id>",
      incompleteDetails: {
        reason: "<value>",
      },
      input: [],
      instructions: "<value>",
      maxOutputTokens: 743646,
      maxToolCalls: 932864,
      metadata: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      model: "Camry",
      object: "<value>",
      output: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      parallelToolCalls: true,
      presencePenalty: 2212.63,
      previousResponseId: "<id>",
      promptCacheKey: "<value>",
      promptCacheRetention: "<value>",
      reasoning: {},
      safetyIdentifier: "<value>",
      serviceTier: "priority",
      status: "queued",
      store: true,
      temperature: 60.72,
      text: "<value>",
      toolChoice: "<value>",
      tools: [
        "<value 1>",
        "<value 2>",
      ],
      topLogprobs: 687370,
      topP: 4456.14,
      truncation: "disabled",
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
      user: null,
    },
    sequenceNumber: 784919,
    type: "response.incomplete",
  },
  event: "response.in_progress",
};
```

### `components.ResponseLifecycleStreamEvent`

```typescript
const value: components.ResponseLifecycleStreamEvent = {
  data: {
    response: {
      background: false,
      completedAt: 916607,
      createdAt: 477912,
      error: {
        code: "<value>",
        message: "<value>",
      },
      frequencyPenalty: 9108.44,
      id: "<id>",
      incompleteDetails: {
        reason: "<value>",
      },
      input: [],
      instructions: "<value>",
      maxOutputTokens: 743646,
      maxToolCalls: 932864,
      metadata: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      model: "Camry",
      object: "<value>",
      output: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      parallelToolCalls: true,
      presencePenalty: 2212.63,
      previousResponseId: "<id>",
      promptCacheKey: "<value>",
      promptCacheRetention: "<value>",
      reasoning: {},
      safetyIdentifier: "<value>",
      serviceTier: "priority",
      status: "queued",
      store: true,
      temperature: 60.72,
      text: "<value>",
      toolChoice: "<value>",
      tools: [
        "<value 1>",
        "<value 2>",
      ],
      topLogprobs: 687370,
      topP: 4456.14,
      truncation: "disabled",
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
      user: null,
    },
    sequenceNumber: 784919,
    type: "response.incomplete",
  },
  event: "response.in_progress",
};
```

### `components.ResponseHostedToolCallStreamEvent`

```typescript
const value: components.ResponseHostedToolCallStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 910645,
    sequenceNumber: 43802,
    type: "response.mcp_call.in_progress",
  },
  event: "response.web_search_call.searching",
};
```

### `components.ResponseHostedToolCallStreamEvent`

```typescript
const value: components.ResponseHostedToolCallStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 910645,
    sequenceNumber: 43802,
    type: "response.mcp_call.in_progress",
  },
  event: "response.web_search_call.searching",
};
```

### `components.ResponseHostedToolCallStreamEvent`

```typescript
const value: components.ResponseHostedToolCallStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 910645,
    sequenceNumber: 43802,
    type: "response.mcp_call.in_progress",
  },
  event: "response.web_search_call.searching",
};
```

### `components.ResponseFunctionCallArgumentsDeltaStreamEvent`

```typescript
const value: components.ResponseFunctionCallArgumentsDeltaStreamEvent = {
  data: {
    delta: "<value>",
    itemId: "<id>",
    outputIndex: 112514,
    sequenceNumber: 271326,
    type: "response.function_call_arguments.delta",
  },
  event: "response.function_call_arguments.delta",
};
```

### `components.ResponseFunctionCallArgumentsDoneStreamEvent`

```typescript
const value: components.ResponseFunctionCallArgumentsDoneStreamEvent = {
  data: {
    arguments: "<value>",
    itemId: "<id>",
    outputIndex: 672268,
    sequenceNumber: 425865,
    type: "response.function_call_arguments.done",
  },
  event: "response.function_call_arguments.done",
};
```

### `components.ResponseHostedToolCallStreamEvent`

```typescript
const value: components.ResponseHostedToolCallStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 910645,
    sequenceNumber: 43802,
    type: "response.mcp_call.in_progress",
  },
  event: "response.web_search_call.searching",
};
```

### `components.ResponseHostedToolCallStreamEvent`

```typescript
const value: components.ResponseHostedToolCallStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 910645,
    sequenceNumber: 43802,
    type: "response.mcp_call.in_progress",
  },
  event: "response.web_search_call.searching",
};
```

### `components.ResponseHostedToolCallStreamEvent`

```typescript
const value: components.ResponseHostedToolCallStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 910645,
    sequenceNumber: 43802,
    type: "response.mcp_call.in_progress",
  },
  event: "response.web_search_call.searching",
};
```

### `components.ResponseImageGenerationPartialImageStreamEvent`

```typescript
const value: components.ResponseImageGenerationPartialImageStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 925050,
    partialImageB64: "<value>",
    partialImageIndex: 249921,
    sequenceNumber: 527563,
    type: "response.image_generation_call.partial_image",
  },
  event: "response.image_generation_call.partial_image",
};
```

### `components.ResponseLifecycleStreamEvent`

```typescript
const value: components.ResponseLifecycleStreamEvent = {
  data: {
    response: {
      background: false,
      completedAt: 916607,
      createdAt: 477912,
      error: {
        code: "<value>",
        message: "<value>",
      },
      frequencyPenalty: 9108.44,
      id: "<id>",
      incompleteDetails: {
        reason: "<value>",
      },
      input: [],
      instructions: "<value>",
      maxOutputTokens: 743646,
      maxToolCalls: 932864,
      metadata: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      model: "Camry",
      object: "<value>",
      output: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      parallelToolCalls: true,
      presencePenalty: 2212.63,
      previousResponseId: "<id>",
      promptCacheKey: "<value>",
      promptCacheRetention: "<value>",
      reasoning: {},
      safetyIdentifier: "<value>",
      serviceTier: "priority",
      status: "queued",
      store: true,
      temperature: 60.72,
      text: "<value>",
      toolChoice: "<value>",
      tools: [
        "<value 1>",
        "<value 2>",
      ],
      topLogprobs: 687370,
      topP: 4456.14,
      truncation: "disabled",
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
      user: null,
    },
    sequenceNumber: 784919,
    type: "response.incomplete",
  },
  event: "response.in_progress",
};
```

### `components.ResponseLifecycleStreamEvent`

```typescript
const value: components.ResponseLifecycleStreamEvent = {
  data: {
    response: {
      background: false,
      completedAt: 916607,
      createdAt: 477912,
      error: {
        code: "<value>",
        message: "<value>",
      },
      frequencyPenalty: 9108.44,
      id: "<id>",
      incompleteDetails: {
        reason: "<value>",
      },
      input: [],
      instructions: "<value>",
      maxOutputTokens: 743646,
      maxToolCalls: 932864,
      metadata: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      model: "Camry",
      object: "<value>",
      output: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      parallelToolCalls: true,
      presencePenalty: 2212.63,
      previousResponseId: "<id>",
      promptCacheKey: "<value>",
      promptCacheRetention: "<value>",
      reasoning: {},
      safetyIdentifier: "<value>",
      serviceTier: "priority",
      status: "queued",
      store: true,
      temperature: 60.72,
      text: "<value>",
      toolChoice: "<value>",
      tools: [
        "<value 1>",
        "<value 2>",
      ],
      topLogprobs: 687370,
      topP: 4456.14,
      truncation: "disabled",
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
      user: null,
    },
    sequenceNumber: 784919,
    type: "response.incomplete",
  },
  event: "response.in_progress",
};
```

### `components.ResponseHostedToolCallStreamEvent`

```typescript
const value: components.ResponseHostedToolCallStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 910645,
    sequenceNumber: 43802,
    type: "response.mcp_call.in_progress",
  },
  event: "response.web_search_call.searching",
};
```

### `components.ResponseHostedToolCallStreamEvent`

```typescript
const value: components.ResponseHostedToolCallStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 910645,
    sequenceNumber: 43802,
    type: "response.mcp_call.in_progress",
  },
  event: "response.web_search_call.searching",
};
```

### `components.ResponseHostedToolCallStreamEvent`

```typescript
const value: components.ResponseHostedToolCallStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 910645,
    sequenceNumber: 43802,
    type: "response.mcp_call.in_progress",
  },
  event: "response.web_search_call.searching",
};
```

### `components.ResponseMcpCallArgumentsDeltaStreamEvent`

```typescript
const value: components.ResponseMcpCallArgumentsDeltaStreamEvent = {
  data: {
    delta: "<value>",
    itemId: "<id>",
    outputIndex: 976515,
    sequenceNumber: 423634,
    type: "response.mcp_call_arguments.delta",
  },
  event: "response.mcp_call_arguments.delta",
};
```

### `components.ResponseMcpCallArgumentsDoneStreamEvent`

```typescript
const value: components.ResponseMcpCallArgumentsDoneStreamEvent = {
  data: {
    arguments: "<value>",
    itemId: "<id>",
    outputIndex: 399777,
    sequenceNumber: 487593,
    type: "response.mcp_call_arguments.done",
  },
  event: "response.mcp_call_arguments.done",
};
```

### `components.ResponseOutputItemStreamEvent`

```typescript
const value: components.ResponseOutputItemStreamEvent = {
  data: {
    item: {},
    outputIndex: 118357,
    sequenceNumber: 486673,
    type: "response.output_item.done",
  },
  event: "response.output_item.added",
};
```

### `components.ResponseOutputItemStreamEvent`

```typescript
const value: components.ResponseOutputItemStreamEvent = {
  data: {
    item: {},
    outputIndex: 118357,
    sequenceNumber: 486673,
    type: "response.output_item.done",
  },
  event: "response.output_item.added",
};
```

### `components.ResponseOutputTextAnnotationAddedStreamEvent`

```typescript
const value: components.ResponseOutputTextAnnotationAddedStreamEvent = {
  data: {
    annotation: {},
    annotationIndex: 123864,
    contentIndex: 245065,
    itemId: "<id>",
    outputIndex: 704135,
    sequenceNumber: 177705,
    type: "response.output_text.annotation.added",
  },
  event: "response.output_text.annotation.added",
};
```

### `components.ResponseOutputTextDeltaStreamEvent`

```typescript
const value: components.ResponseOutputTextDeltaStreamEvent = {
  data: {
    contentIndex: 467304,
    delta: "<value>",
    itemId: "<id>",
    logprobs: [
      {},
    ],
    outputIndex: 775448,
    sequenceNumber: 615240,
    type: "response.output_text.delta",
  },
  event: "response.output_text.delta",
};
```

### `components.ResponseOutputTextDoneStreamEvent`

```typescript
const value: components.ResponseOutputTextDoneStreamEvent = {
  data: {
    contentIndex: 255769,
    itemId: "<id>",
    logprobs: [
      {},
      {},
      {},
    ],
    outputIndex: 241295,
    sequenceNumber: 273433,
    text: "<value>",
    type: "response.output_text.done",
  },
  event: "response.output_text.done",
};
```

### `components.ResponseLifecycleStreamEvent`

```typescript
const value: components.ResponseLifecycleStreamEvent = {
  data: {
    response: {
      background: false,
      completedAt: 916607,
      createdAt: 477912,
      error: {
        code: "<value>",
        message: "<value>",
      },
      frequencyPenalty: 9108.44,
      id: "<id>",
      incompleteDetails: {
        reason: "<value>",
      },
      input: [],
      instructions: "<value>",
      maxOutputTokens: 743646,
      maxToolCalls: 932864,
      metadata: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      model: "Camry",
      object: "<value>",
      output: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      parallelToolCalls: true,
      presencePenalty: 2212.63,
      previousResponseId: "<id>",
      promptCacheKey: "<value>",
      promptCacheRetention: "<value>",
      reasoning: {},
      safetyIdentifier: "<value>",
      serviceTier: "priority",
      status: "queued",
      store: true,
      temperature: 60.72,
      text: "<value>",
      toolChoice: "<value>",
      tools: [
        "<value 1>",
        "<value 2>",
      ],
      topLogprobs: 687370,
      topP: 4456.14,
      truncation: "disabled",
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
      user: null,
    },
    sequenceNumber: 784919,
    type: "response.incomplete",
  },
  event: "response.in_progress",
};
```

### `components.ResponseReasoningDeltaStreamEvent`

```typescript
const value: components.ResponseReasoningDeltaStreamEvent = {
  data: {
    contentIndex: 585374,
    delta: "<value>",
    itemId: "<id>",
    outputIndex: 616484,
    sequenceNumber: 567813,
    type: "response.reasoning.delta",
  },
  event: "response.reasoning.delta",
};
```

### `components.ResponseReasoningDoneStreamEvent`

```typescript
const value: components.ResponseReasoningDoneStreamEvent = {
  data: {
    contentIndex: 842760,
    itemId: "<id>",
    outputIndex: 366874,
    sequenceNumber: 570183,
    text: "<value>",
    type: "response.reasoning_text.done",
  },
  event: "response.reasoning.done",
};
```

### `components.ResponseReasoningSummaryPartStreamEvent`

```typescript
const value: components.ResponseReasoningSummaryPartStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 978377,
    part: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    sequenceNumber: 460232,
    summaryIndex: 955865,
    type: "response.reasoning_summary_part.done",
  },
  event: "response.reasoning_summary_part.done",
};
```

### `components.ResponseReasoningSummaryPartStreamEvent`

```typescript
const value: components.ResponseReasoningSummaryPartStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 978377,
    part: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    sequenceNumber: 460232,
    summaryIndex: 955865,
    type: "response.reasoning_summary_part.done",
  },
  event: "response.reasoning_summary_part.done",
};
```

### `components.ResponseReasoningSummaryTextDeltaStreamEvent`

```typescript
const value: components.ResponseReasoningSummaryTextDeltaStreamEvent = {
  data: {
    delta: "<value>",
    itemId: "<id>",
    outputIndex: 540085,
    sequenceNumber: 718040,
    summaryIndex: 520491,
    type: "response.reasoning_summary_text.delta",
  },
  event: "response.reasoning_summary_text.delta",
};
```

### `components.ResponseReasoningSummaryTextDoneStreamEvent`

```typescript
const value: components.ResponseReasoningSummaryTextDoneStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 548177,
    sequenceNumber: 768286,
    summaryIndex: 237475,
    text: "<value>",
    type: "response.reasoning_summary_text.done",
  },
  event: "response.reasoning_summary_text.done",
};
```

### `components.ResponseReasoningDeltaStreamEvent`

```typescript
const value: components.ResponseReasoningDeltaStreamEvent = {
  data: {
    contentIndex: 585374,
    delta: "<value>",
    itemId: "<id>",
    outputIndex: 616484,
    sequenceNumber: 567813,
    type: "response.reasoning.delta",
  },
  event: "response.reasoning.delta",
};
```

### `components.ResponseReasoningDoneStreamEvent`

```typescript
const value: components.ResponseReasoningDoneStreamEvent = {
  data: {
    contentIndex: 842760,
    itemId: "<id>",
    outputIndex: 366874,
    sequenceNumber: 570183,
    text: "<value>",
    type: "response.reasoning_text.done",
  },
  event: "response.reasoning.done",
};
```

### `components.ResponseRefusalDeltaStreamEvent`

```typescript
const value: components.ResponseRefusalDeltaStreamEvent = {
  data: {
    contentIndex: 945677,
    delta: "<value>",
    itemId: "<id>",
    outputIndex: 703349,
    sequenceNumber: 665795,
    type: "response.refusal.delta",
  },
  event: "response.refusal.delta",
};
```

### `components.ResponseRefusalDoneStreamEvent`

```typescript
const value: components.ResponseRefusalDoneStreamEvent = {
  data: {
    contentIndex: 324363,
    itemId: "<id>",
    outputIndex: 766495,
    refusal: "<value>",
    sequenceNumber: 116206,
    type: "response.refusal.done",
  },
  event: "response.refusal.done",
};
```

### `components.ResponseHostedToolCallStreamEvent`

```typescript
const value: components.ResponseHostedToolCallStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 910645,
    sequenceNumber: 43802,
    type: "response.mcp_call.in_progress",
  },
  event: "response.web_search_call.searching",
};
```

### `components.ResponseHostedToolCallStreamEvent`

```typescript
const value: components.ResponseHostedToolCallStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 910645,
    sequenceNumber: 43802,
    type: "response.mcp_call.in_progress",
  },
  event: "response.web_search_call.searching",
};
```

### `components.ResponseHostedToolCallStreamEvent`

```typescript
const value: components.ResponseHostedToolCallStreamEvent = {
  data: {
    itemId: "<id>",
    outputIndex: 910645,
    sequenceNumber: 43802,
    type: "response.mcp_call.in_progress",
  },
  event: "response.web_search_call.searching",
};
```

