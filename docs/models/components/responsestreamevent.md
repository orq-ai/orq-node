# ResponseStreamEvent

A single server-sent event emitted on the response stream. The `type` field discriminates the payload.


## Supported Types

### `components.ResponseErrorStreamEvent`

```typescript
const value: components.ResponseErrorStreamEvent = {
  error: {
    code: "<value>",
    message: "<value>",
  },
  sequenceNumber: 122768,
  type: "error",
};
```

### `components.ResponseCodeInterpreterCallCompletedStreamEvent`

```typescript
const value: components.ResponseCodeInterpreterCallCompletedStreamEvent = {
  itemId: "<id>",
  outputIndex: 459812,
  sequenceNumber: 729005,
  type: "response.code_interpreter_call.completed",
};
```

### `components.ResponseCodeInterpreterCallInProgressStreamEvent`

```typescript
const value: components.ResponseCodeInterpreterCallInProgressStreamEvent = {
  itemId: "<id>",
  outputIndex: 780174,
  sequenceNumber: 122392,
  type: "response.code_interpreter_call.in_progress",
};
```

### `components.ResponseCodeInterpreterCallInterpretingStreamEvent`

```typescript
const value: components.ResponseCodeInterpreterCallInterpretingStreamEvent = {
  itemId: "<id>",
  outputIndex: 79005,
  sequenceNumber: 1771,
  type: "response.code_interpreter_call.interpreting",
};
```

### `components.ResponseCodeInterpreterCallCodeDeltaStreamEvent`

```typescript
const value: components.ResponseCodeInterpreterCallCodeDeltaStreamEvent = {
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 213785,
  sequenceNumber: 67075,
  type: "response.code_interpreter_call_code.delta",
};
```

### `components.ResponseCodeInterpreterCallCodeDoneStreamEvent`

```typescript
const value: components.ResponseCodeInterpreterCallCodeDoneStreamEvent = {
  code: "<value>",
  itemId: "<id>",
  outputIndex: 202916,
  sequenceNumber: 33438,
  type: "response.code_interpreter_call_code.done",
};
```

### `components.ResponseCompletedStreamEvent`

```typescript
const value: components.ResponseCompletedStreamEvent = {
  response: {
    background: true,
    completedAt: 943245,
    createdAt: 963158,
    error: {
      code: "<value>",
      message: "<value>",
    },
    frequencyPenalty: 3814.87,
    id: "<id>",
    incompleteDetails: {
      reason: "<value>",
    },
    input: [
      "<value 1>",
    ],
    instructions: "<value>",
    maxOutputTokens: 39682,
    maxToolCalls: 785191,
    metadata: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    model: "Escalade",
    object: "<value>",
    output: [
      "<value 1>",
      "<value 2>",
    ],
    parallelToolCalls: true,
    presencePenalty: 5947.45,
    previousResponseId: "<id>",
    promptCacheKey: "<value>",
    promptCacheRetention: "<value>",
    reasoning: {},
    safetyIdentifier: "<value>",
    serviceTier: "default",
    status: "requires_action",
    store: false,
    temperature: 5687.5,
    text: "<value>",
    toolChoice: "<value>",
    tools: [
      "<value 1>",
    ],
    topLogprobs: 222339,
    topP: 9880.72,
    truncation: "auto",
    usage: {
      inputTokens: 786005,
      inputTokensDetails: {
        cacheCreationTokens: 763695,
        cachedTokens: 732588,
      },
      outputTokens: 376439,
      outputTokensDetails: {
        reasoningTokens: 349904,
      },
      totalTokens: 437223,
    },
    user: "Montana.Daniel",
  },
  sequenceNumber: 812037,
  type: "response.completed",
};
```

### `components.ResponseContentPartAddedStreamEvent`

```typescript
const value: components.ResponseContentPartAddedStreamEvent = {
  contentIndex: 435452,
  itemId: "<id>",
  outputIndex: 850642,
  part: {},
  sequenceNumber: 22110,
  type: "response.content_part.added",
};
```

### `components.ResponseContentPartDoneStreamEvent`

```typescript
const value: components.ResponseContentPartDoneStreamEvent = {
  contentIndex: 666083,
  itemId: "<id>",
  outputIndex: 884313,
  part: {
    "key": "<value>",
  },
  sequenceNumber: 797752,
  type: "response.content_part.done",
};
```

### `components.ResponseCreatedStreamEvent`

```typescript
const value: components.ResponseCreatedStreamEvent = {
  response: {
    background: true,
    completedAt: 943245,
    createdAt: 963158,
    error: {
      code: "<value>",
      message: "<value>",
    },
    frequencyPenalty: 3814.87,
    id: "<id>",
    incompleteDetails: {
      reason: "<value>",
    },
    input: [
      "<value 1>",
    ],
    instructions: "<value>",
    maxOutputTokens: 39682,
    maxToolCalls: 785191,
    metadata: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    model: "Escalade",
    object: "<value>",
    output: [
      "<value 1>",
      "<value 2>",
    ],
    parallelToolCalls: true,
    presencePenalty: 5947.45,
    previousResponseId: "<id>",
    promptCacheKey: "<value>",
    promptCacheRetention: "<value>",
    reasoning: {},
    safetyIdentifier: "<value>",
    serviceTier: "default",
    status: "requires_action",
    store: false,
    temperature: 5687.5,
    text: "<value>",
    toolChoice: "<value>",
    tools: [
      "<value 1>",
    ],
    topLogprobs: 222339,
    topP: 9880.72,
    truncation: "auto",
    usage: {
      inputTokens: 786005,
      inputTokensDetails: {
        cacheCreationTokens: 763695,
        cachedTokens: 732588,
      },
      outputTokens: 376439,
      outputTokensDetails: {
        reasoningTokens: 349904,
      },
      totalTokens: 437223,
    },
    user: "Montana.Daniel",
  },
  sequenceNumber: 891668,
  type: "response.created",
};
```

### `components.ResponseCustomToolCallInputDeltaStreamEvent`

```typescript
const value: components.ResponseCustomToolCallInputDeltaStreamEvent = {
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 489568,
  sequenceNumber: 887496,
  type: "response.custom_tool_call_input.delta",
};
```

### `components.ResponseCustomToolCallInputDoneStreamEvent`

```typescript
const value: components.ResponseCustomToolCallInputDoneStreamEvent = {
  input: "<value>",
  itemId: "<id>",
  outputIndex: 586961,
  sequenceNumber: 603044,
  type: "response.custom_tool_call_input.done",
};
```

### `components.ResponseFailedStreamEvent`

```typescript
const value: components.ResponseFailedStreamEvent = {
  response: {
    background: true,
    completedAt: 943245,
    createdAt: 963158,
    error: {
      code: "<value>",
      message: "<value>",
    },
    frequencyPenalty: 3814.87,
    id: "<id>",
    incompleteDetails: {
      reason: "<value>",
    },
    input: [
      "<value 1>",
    ],
    instructions: "<value>",
    maxOutputTokens: 39682,
    maxToolCalls: 785191,
    metadata: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    model: "Escalade",
    object: "<value>",
    output: [
      "<value 1>",
      "<value 2>",
    ],
    parallelToolCalls: true,
    presencePenalty: 5947.45,
    previousResponseId: "<id>",
    promptCacheKey: "<value>",
    promptCacheRetention: "<value>",
    reasoning: {},
    safetyIdentifier: "<value>",
    serviceTier: "default",
    status: "requires_action",
    store: false,
    temperature: 5687.5,
    text: "<value>",
    toolChoice: "<value>",
    tools: [
      "<value 1>",
    ],
    topLogprobs: 222339,
    topP: 9880.72,
    truncation: "auto",
    usage: {
      inputTokens: 786005,
      inputTokensDetails: {
        cacheCreationTokens: 763695,
        cachedTokens: 732588,
      },
      outputTokens: 376439,
      outputTokensDetails: {
        reasoningTokens: 349904,
      },
      totalTokens: 437223,
    },
    user: "Montana.Daniel",
  },
  sequenceNumber: 34792,
  type: "response.failed",
};
```

### `components.ResponseFileSearchCallCompletedStreamEvent`

```typescript
const value: components.ResponseFileSearchCallCompletedStreamEvent = {
  itemId: "<id>",
  outputIndex: 596739,
  sequenceNumber: 681611,
  type: "response.file_search_call.completed",
};
```

### `components.ResponseFileSearchCallInProgressStreamEvent`

```typescript
const value: components.ResponseFileSearchCallInProgressStreamEvent = {
  itemId: "<id>",
  outputIndex: 381120,
  sequenceNumber: 313210,
  type: "response.file_search_call.in_progress",
};
```

### `components.ResponseFileSearchCallSearchingStreamEvent`

```typescript
const value: components.ResponseFileSearchCallSearchingStreamEvent = {
  itemId: "<id>",
  outputIndex: 803863,
  sequenceNumber: 589079,
  type: "response.file_search_call.searching",
};
```

### `components.ResponseFunctionCallArgumentsDeltaStreamEvent`

```typescript
const value: components.ResponseFunctionCallArgumentsDeltaStreamEvent = {
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 112514,
  sequenceNumber: 271326,
  type: "response.function_call_arguments.delta",
};
```

### `components.ResponseFunctionCallArgumentsDoneStreamEvent`

```typescript
const value: components.ResponseFunctionCallArgumentsDoneStreamEvent = {
  arguments: "<value>",
  itemId: "<id>",
  outputIndex: 672268,
  sequenceNumber: 425865,
  type: "response.function_call_arguments.done",
};
```

### `components.ResponseImageGenerationCallCompletedStreamEvent`

```typescript
const value: components.ResponseImageGenerationCallCompletedStreamEvent = {
  itemId: "<id>",
  outputIndex: 269175,
  sequenceNumber: 844915,
  type: "response.image_generation_call.completed",
};
```

### `components.ResponseImageGenerationCallGeneratingStreamEvent`

```typescript
const value: components.ResponseImageGenerationCallGeneratingStreamEvent = {
  itemId: "<id>",
  outputIndex: 180450,
  sequenceNumber: 552384,
  type: "response.image_generation_call.generating",
};
```

### `components.ResponseImageGenerationCallInProgressStreamEvent`

```typescript
const value: components.ResponseImageGenerationCallInProgressStreamEvent = {
  itemId: "<id>",
  outputIndex: 859020,
  sequenceNumber: 228046,
  type: "response.image_generation_call.in_progress",
};
```

### `components.ResponseImageGenerationCallPartialImageStreamEvent`

```typescript
const value: components.ResponseImageGenerationCallPartialImageStreamEvent = {
  itemId: "<id>",
  outputIndex: 491215,
  partialImageB64: "<value>",
  partialImageIndex: 529497,
  sequenceNumber: 948566,
  type: "response.image_generation_call.partial_image",
};
```

### `components.ResponseInProgressStreamEvent`

```typescript
const value: components.ResponseInProgressStreamEvent = {
  response: {
    background: true,
    completedAt: 943245,
    createdAt: 963158,
    error: {
      code: "<value>",
      message: "<value>",
    },
    frequencyPenalty: 3814.87,
    id: "<id>",
    incompleteDetails: {
      reason: "<value>",
    },
    input: [
      "<value 1>",
    ],
    instructions: "<value>",
    maxOutputTokens: 39682,
    maxToolCalls: 785191,
    metadata: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    model: "Escalade",
    object: "<value>",
    output: [
      "<value 1>",
      "<value 2>",
    ],
    parallelToolCalls: true,
    presencePenalty: 5947.45,
    previousResponseId: "<id>",
    promptCacheKey: "<value>",
    promptCacheRetention: "<value>",
    reasoning: {},
    safetyIdentifier: "<value>",
    serviceTier: "default",
    status: "requires_action",
    store: false,
    temperature: 5687.5,
    text: "<value>",
    toolChoice: "<value>",
    tools: [
      "<value 1>",
    ],
    topLogprobs: 222339,
    topP: 9880.72,
    truncation: "auto",
    usage: {
      inputTokens: 786005,
      inputTokensDetails: {
        cacheCreationTokens: 763695,
        cachedTokens: 732588,
      },
      outputTokens: 376439,
      outputTokensDetails: {
        reasoningTokens: 349904,
      },
      totalTokens: 437223,
    },
    user: "Montana.Daniel",
  },
  sequenceNumber: 206972,
  type: "response.in_progress",
};
```

### `components.ResponseIncompleteStreamEvent`

```typescript
const value: components.ResponseIncompleteStreamEvent = {
  response: {
    background: true,
    completedAt: 943245,
    createdAt: 963158,
    error: {
      code: "<value>",
      message: "<value>",
    },
    frequencyPenalty: 3814.87,
    id: "<id>",
    incompleteDetails: {
      reason: "<value>",
    },
    input: [
      "<value 1>",
    ],
    instructions: "<value>",
    maxOutputTokens: 39682,
    maxToolCalls: 785191,
    metadata: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    model: "Escalade",
    object: "<value>",
    output: [
      "<value 1>",
      "<value 2>",
    ],
    parallelToolCalls: true,
    presencePenalty: 5947.45,
    previousResponseId: "<id>",
    promptCacheKey: "<value>",
    promptCacheRetention: "<value>",
    reasoning: {},
    safetyIdentifier: "<value>",
    serviceTier: "default",
    status: "requires_action",
    store: false,
    temperature: 5687.5,
    text: "<value>",
    toolChoice: "<value>",
    tools: [
      "<value 1>",
    ],
    topLogprobs: 222339,
    topP: 9880.72,
    truncation: "auto",
    usage: {
      inputTokens: 786005,
      inputTokensDetails: {
        cacheCreationTokens: 763695,
        cachedTokens: 732588,
      },
      outputTokens: 376439,
      outputTokensDetails: {
        reasoningTokens: 349904,
      },
      totalTokens: 437223,
    },
    user: "Montana.Daniel",
  },
  sequenceNumber: 321239,
  type: "response.incomplete",
};
```

### `components.ResponseMCPCallCompletedStreamEvent`

```typescript
const value: components.ResponseMCPCallCompletedStreamEvent = {
  itemId: "<id>",
  outputIndex: 176146,
  sequenceNumber: 764760,
  type: "response.mcp_call.completed",
};
```

### `components.ResponseMCPCallFailedStreamEvent`

```typescript
const value: components.ResponseMCPCallFailedStreamEvent = {
  itemId: "<id>",
  outputIndex: 665534,
  sequenceNumber: 895265,
  type: "response.mcp_call.failed",
};
```

### `components.ResponseMCPCallInProgressStreamEvent`

```typescript
const value: components.ResponseMCPCallInProgressStreamEvent = {
  itemId: "<id>",
  outputIndex: 13415,
  sequenceNumber: 124818,
  type: "response.mcp_call.in_progress",
};
```

### `components.ResponseMCPCallArgumentsDeltaStreamEvent`

```typescript
const value: components.ResponseMCPCallArgumentsDeltaStreamEvent = {
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 736027,
  sequenceNumber: 135378,
  type: "response.mcp_call_arguments.delta",
};
```

### `components.ResponseMCPCallArgumentsDoneStreamEvent`

```typescript
const value: components.ResponseMCPCallArgumentsDoneStreamEvent = {
  arguments: "<value>",
  itemId: "<id>",
  outputIndex: 306364,
  sequenceNumber: 813167,
  type: "response.mcp_call_arguments.done",
};
```

### `components.ResponseMCPListToolsCompletedStreamEvent`

```typescript
const value: components.ResponseMCPListToolsCompletedStreamEvent = {
  itemId: "<id>",
  outputIndex: 73366,
  sequenceNumber: 745152,
  type: "response.mcp_list_tools.completed",
};
```

### `components.ResponseMCPListToolsFailedStreamEvent`

```typescript
const value: components.ResponseMCPListToolsFailedStreamEvent = {
  itemId: "<id>",
  outputIndex: 69290,
  sequenceNumber: 747779,
  type: "response.mcp_list_tools.failed",
};
```

### `components.ResponseMCPListToolsInProgressStreamEvent`

```typescript
const value: components.ResponseMCPListToolsInProgressStreamEvent = {
  itemId: "<id>",
  outputIndex: 188856,
  sequenceNumber: 632370,
  type: "response.mcp_list_tools.in_progress",
};
```

### `components.ResponseOutputItemAddedStreamEvent`

```typescript
const value: components.ResponseOutputItemAddedStreamEvent = {
  item: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  outputIndex: 91835,
  sequenceNumber: 487506,
  type: "response.output_item.added",
};
```

### `components.ResponseOutputItemDoneStreamEvent`

```typescript
const value: components.ResponseOutputItemDoneStreamEvent = {
  item: {},
  outputIndex: 796105,
  sequenceNumber: 728173,
  type: "response.output_item.done",
};
```

### `components.ResponseOutputTextAnnotationAddedStreamEvent`

```typescript
const value: components.ResponseOutputTextAnnotationAddedStreamEvent = {
  annotation: {},
  annotationIndex: 123864,
  contentIndex: 245065,
  itemId: "<id>",
  outputIndex: 704135,
  sequenceNumber: 177705,
  type: "response.output_text.annotation.added",
};
```

### `components.ResponseOutputTextDeltaStreamEvent`

```typescript
const value: components.ResponseOutputTextDeltaStreamEvent = {
  contentIndex: 467304,
  delta: "<value>",
  itemId: "<id>",
  logprobs: [
    {},
  ],
  outputIndex: 775448,
  sequenceNumber: 615240,
  type: "response.output_text.delta",
};
```

### `components.ResponseOutputTextDoneStreamEvent`

```typescript
const value: components.ResponseOutputTextDoneStreamEvent = {
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
};
```

### `components.ResponseQueuedStreamEvent`

```typescript
const value: components.ResponseQueuedStreamEvent = {
  response: {
    background: true,
    completedAt: 943245,
    createdAt: 963158,
    error: {
      code: "<value>",
      message: "<value>",
    },
    frequencyPenalty: 3814.87,
    id: "<id>",
    incompleteDetails: {
      reason: "<value>",
    },
    input: [
      "<value 1>",
    ],
    instructions: "<value>",
    maxOutputTokens: 39682,
    maxToolCalls: 785191,
    metadata: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    model: "Escalade",
    object: "<value>",
    output: [
      "<value 1>",
      "<value 2>",
    ],
    parallelToolCalls: true,
    presencePenalty: 5947.45,
    previousResponseId: "<id>",
    promptCacheKey: "<value>",
    promptCacheRetention: "<value>",
    reasoning: {},
    safetyIdentifier: "<value>",
    serviceTier: "default",
    status: "requires_action",
    store: false,
    temperature: 5687.5,
    text: "<value>",
    toolChoice: "<value>",
    tools: [
      "<value 1>",
    ],
    topLogprobs: 222339,
    topP: 9880.72,
    truncation: "auto",
    usage: {
      inputTokens: 786005,
      inputTokensDetails: {
        cacheCreationTokens: 763695,
        cachedTokens: 732588,
      },
      outputTokens: 376439,
      outputTokensDetails: {
        reasoningTokens: 349904,
      },
      totalTokens: 437223,
    },
    user: "Montana.Daniel",
  },
  sequenceNumber: 214898,
  type: "response.queued",
};
```

### `components.ResponseReasoningDeltaStreamEvent`

```typescript
const value: components.ResponseReasoningDeltaStreamEvent = {
  contentIndex: 585374,
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 616484,
  sequenceNumber: 567813,
  type: "response.reasoning.delta",
};
```

### `components.ResponseReasoningDoneStreamEvent`

```typescript
const value: components.ResponseReasoningDoneStreamEvent = {
  contentIndex: 842760,
  itemId: "<id>",
  outputIndex: 366874,
  sequenceNumber: 570183,
  text: "<value>",
  type: "response.reasoning.done",
};
```

### `components.ResponseReasoningSummaryPartAddedStreamEvent`

```typescript
const value: components.ResponseReasoningSummaryPartAddedStreamEvent = {
  itemId: "<id>",
  outputIndex: 338504,
  part: {},
  sequenceNumber: 639795,
  summaryIndex: 3239,
  type: "response.reasoning_summary_part.added",
};
```

### `components.ResponseReasoningSummaryPartDoneStreamEvent`

```typescript
const value: components.ResponseReasoningSummaryPartDoneStreamEvent = {
  itemId: "<id>",
  outputIndex: 680285,
  part: {
    "key": "<value>",
  },
  sequenceNumber: 606296,
  summaryIndex: 996469,
  type: "response.reasoning_summary_part.done",
};
```

### `components.ResponseReasoningSummaryTextDeltaStreamEvent`

```typescript
const value: components.ResponseReasoningSummaryTextDeltaStreamEvent = {
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 540085,
  sequenceNumber: 718040,
  summaryIndex: 520491,
  type: "response.reasoning_summary_text.delta",
};
```

### `components.ResponseReasoningSummaryTextDoneStreamEvent`

```typescript
const value: components.ResponseReasoningSummaryTextDoneStreamEvent = {
  itemId: "<id>",
  outputIndex: 548177,
  sequenceNumber: 768286,
  summaryIndex: 237475,
  text: "<value>",
  type: "response.reasoning_summary_text.done",
};
```

### `components.ResponseReasoningTextDeltaStreamEvent`

```typescript
const value: components.ResponseReasoningTextDeltaStreamEvent = {
  contentIndex: 796218,
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 520826,
  sequenceNumber: 372730,
  type: "response.reasoning_text.delta",
};
```

### `components.ResponseReasoningTextDoneStreamEvent`

```typescript
const value: components.ResponseReasoningTextDoneStreamEvent = {
  contentIndex: 681167,
  itemId: "<id>",
  outputIndex: 326773,
  sequenceNumber: 379048,
  text: "<value>",
  type: "response.reasoning_text.done",
};
```

### `components.ResponseRefusalDeltaStreamEvent`

```typescript
const value: components.ResponseRefusalDeltaStreamEvent = {
  contentIndex: 945677,
  delta: "<value>",
  itemId: "<id>",
  outputIndex: 703349,
  sequenceNumber: 665795,
  type: "response.refusal.delta",
};
```

### `components.ResponseRefusalDoneStreamEvent`

```typescript
const value: components.ResponseRefusalDoneStreamEvent = {
  contentIndex: 324363,
  itemId: "<id>",
  outputIndex: 766495,
  refusal: "<value>",
  sequenceNumber: 116206,
  type: "response.refusal.done",
};
```

### `components.ResponseWebSearchCallCompletedStreamEvent`

```typescript
const value: components.ResponseWebSearchCallCompletedStreamEvent = {
  itemId: "<id>",
  outputIndex: 638160,
  sequenceNumber: 14212,
  type: "response.web_search_call.completed",
};
```

### `components.ResponseWebSearchCallInProgressStreamEvent`

```typescript
const value: components.ResponseWebSearchCallInProgressStreamEvent = {
  itemId: "<id>",
  outputIndex: 365591,
  sequenceNumber: 910405,
  type: "response.web_search_call.in_progress",
};
```

### `components.ResponseWebSearchCallSearchingStreamEvent`

```typescript
const value: components.ResponseWebSearchCallSearchingStreamEvent = {
  itemId: "<id>",
  outputIndex: 24737,
  sequenceNumber: 314478,
  type: "response.web_search_call.searching",
};
```

