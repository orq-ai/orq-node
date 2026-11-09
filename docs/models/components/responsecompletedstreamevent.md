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
    user: "Aliza35",
  },
  sequenceNumber: 194903,
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