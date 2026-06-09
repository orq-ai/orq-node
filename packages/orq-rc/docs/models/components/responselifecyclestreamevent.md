# ResponseLifecycleStreamEvent

## Example Usage

```typescript
import { ResponseLifecycleStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseLifecycleStreamEvent = {
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

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                     | [components.ResponseLifecycleStreamEventData](../../models/components/responselifecyclestreameventdata.md) | :heavy_check_mark:                                                                                         | The event payload.                                                                                         |
| `event`                                                                                                    | [components.Event](../../models/components/event.md)                                                       | :heavy_check_mark:                                                                                         | The SSE event name, equal to the payload's `type`.                                                         |