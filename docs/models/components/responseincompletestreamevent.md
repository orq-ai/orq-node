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
      {
        "call_id": "<id>",
        "type": "function_call_output",
      },
    ],
    parallelToolCalls: false,
    presencePenalty: 4039.54,
    previousResponseId: "<id>",
    promptCacheKey: "<value>",
    promptCacheOptions: {},
    promptCacheRetention: "<value>",
    reasoning: {},
    safetyIdentifier: "<value>",
    serviceTier: "fast",
    status: "failed",
    store: true,
    temperature: 3682.55,
    text: "<value>",
    toolChoice: "<value>",
    tools: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    topLogprobs: 808463,
    topP: 2056.06,
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
    user: null,
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