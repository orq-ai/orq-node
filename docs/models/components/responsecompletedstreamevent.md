# ResponseCompletedStreamEvent

A `response.completed` server-sent event.

## Example Usage

```typescript
import { ResponseCompletedStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseCompletedStreamEvent = {
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
      inputTokens: 349676,
      inputTokensDetails: {
        cacheCreationTokens: 786005,
        cachedTokens: 763695,
      },
      outputTokens: 732588,
      outputTokensDetails: {
        reasoningTokens: 376439,
      },
      totalTokens: 349904,
    },
    user: "Montana.Daniel",
  },
  sequenceNumber: 812037,
  type: "response.completed",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `response`                                                                             | [components.PublicResponseResource](../../models/components/publicresponseresource.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `sequenceNumber`                                                                       | *number*                                                                               | :heavy_check_mark:                                                                     | Monotonically increasing sequence number for ordering events.                          |
| `type`                                                                                 | *"response.completed"*                                                                 | :heavy_check_mark:                                                                     | The event type. Discriminates the payload.                                             |
| `additionalProperties`                                                                 | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |