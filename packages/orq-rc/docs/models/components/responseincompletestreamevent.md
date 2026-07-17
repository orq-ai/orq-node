# ResponseIncompleteStreamEvent

A `response.incomplete` server-sent event.

## Example Usage

```typescript
import { ResponseIncompleteStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseIncompleteStreamEvent = {
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

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `response`                                                                             | [components.PublicResponseResource](../../models/components/publicresponseresource.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `sequenceNumber`                                                                       | *number*                                                                               | :heavy_check_mark:                                                                     | Monotonically increasing sequence number for ordering events.                          |
| `type`                                                                                 | *"response.incomplete"*                                                                | :heavy_check_mark:                                                                     | The event type. Discriminates the payload.                                             |
| `additionalProperties`                                                                 | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |