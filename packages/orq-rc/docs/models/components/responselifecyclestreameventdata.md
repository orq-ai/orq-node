# ResponseLifecycleStreamEventData

The event payload.

## Example Usage

```typescript
import { ResponseLifecycleStreamEventData } from "@orq-ai/node/models/components";

let value: ResponseLifecycleStreamEventData = {
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
  sequenceNumber: 596995,
  type: "response.queued",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `response`                                                                                                 | [components.PublicResponseResource](../../models/components/publicresponseresource.md)                     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `sequenceNumber`                                                                                           | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Monotonically increasing sequence number for ordering events.                                              |
| `type`                                                                                                     | [components.ResponseLifecycleStreamEventType](../../models/components/responselifecyclestreameventtype.md) | :heavy_check_mark:                                                                                         | The event type. Matches the SSE `event` field.                                                             |
| `additionalProperties`                                                                                     | Record<string, *any*>                                                                                      | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |