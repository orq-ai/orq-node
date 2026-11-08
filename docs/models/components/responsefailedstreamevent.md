# ResponseFailedStreamEvent

A `response.failed` server-sent event.

## Example Usage

```typescript
import { ResponseFailedStreamEvent } from "@orq-ai/node/models/components";

let value: ResponseFailedStreamEvent = {
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
    instructions: "<value>",
    maxOutputTokens: 349227,
    maxToolCalls: 39682,
    metadata: {
      "key": "<value>",
    },
    model: "PT Cruiser",
    object: "<value>",
    output: [
      "<value 1>",
    ],
    parallelToolCalls: false,
    presencePenalty: 6753.07,
    previousResponseId: "<id>",
    promptCacheKey: "<value>",
    promptCacheOptions: {},
    promptCacheRetention: "<value>",
    reasoning: {},
    safetyIdentifier: "<value>",
    serviceTier: "scale",
    status: "in_progress",
    store: false,
    temperature: 5000.36,
    text: "<value>",
    toolChoice: "<value>",
    tools: [
      "<value 1>",
    ],
    topLogprobs: 368255,
    topP: 2223.39,
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
    user: "Rogers5",
  },
  sequenceNumber: 34792,
  type: "response.failed",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `response`                                                                             | [components.PublicResponseResource](../../models/components/publicresponseresource.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `sequenceNumber`                                                                       | *number*                                                                               | :heavy_check_mark:                                                                     | Monotonically increasing sequence number for ordering events.                          |
| `type`                                                                                 | *"response.failed"*                                                                    | :heavy_check_mark:                                                                     | The event type. Discriminates the payload.                                             |
| `additionalProperties`                                                                 | Record<string, *any*>                                                                  | :heavy_minus_sign:                                                                     | N/A                                                                                    |