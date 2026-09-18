# ResponseQueuedStreamEvent

A `response.queued` server-sent event.

## Example Usage

```typescript
import { ResponseQueuedStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseQueuedStreamEvent = {
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
    promptCacheOptions: {},
    promptCacheRetention: "<value>",
    reasoning: {},
    safetyIdentifier: "<value>",
    serviceTier: "priority",
    status: "completed",
    store: false,
    temperature: 3759.8,
    text: "<value>",
    toolChoice: "<value>",
    tools: [],
    topLogprobs: 988072,
    topP: 8084.63,
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
    user: "Aliza35",
  },
  sequenceNumber: 214898,
  type: "response.queued",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `response`                                                                             | [components.PublicResponseResource](../../models/components/publicresponseresource.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `sequenceNumber`                                                                       | *number*                                                                               | :heavy_check_mark:                                                                     | Monotonically increasing sequence number for ordering events.                          |
| `type`                                                                                 | *"response.queued"*                                                                    | :heavy_check_mark:                                                                     | The event type. Discriminates the payload.                                             |
| `additionalProperties`                                                                 | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |