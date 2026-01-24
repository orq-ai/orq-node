# CreateSpeechOrq

## Example Usage

```typescript
import { CreateSpeechOrq } from "@orq-ai/node/models/operations";

let value: CreateSpeechOrq = {
  retry: {
    onCodes: [
      429,
      500,
      502,
      503,
      504,
    ],
  },
  fallbacks: [
    {
      model: "openai/gpt-4o-mini",
    },
  ],
  identity: {
    id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
    displayName: "Jane Doe",
    email: "jane.doe@example.com",
    metadata: [
      {
        "department": "Engineering",
        "role": "Senior Developer",
      },
    ],
    logoUrl: "https://example.com/avatars/jane-doe.jpg",
    tags: [
      "hr",
      "engineering",
    ],
  },
  thread: {
    id: "thread_01ARZ3NDEKTSV4RRFFQ69G5FAV",
    tags: [
      "customer-support",
      "priority-high",
    ],
  },
  loadBalancer: {
    type: "weight_based",
    models: [
      {
        model: "openai/gpt-4o",
        weight: 0.7,
      },
      {
        model: "anthropic/claude-3-5-sonnet",
        weight: 0.3,
      },
    ],
  },
  timeout: {
    callTimeout: 30000,
  },
};
```

## Fields

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  | Example                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `retry`                                                                                                                                                                                                      | [operations.CreateSpeechRetry](../../models/operations/createspeechretry.md)                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                           | Retry configuration for the request                                                                                                                                                                          |                                                                                                                                                                                                              |
| `fallbacks`                                                                                                                                                                                                  | [operations.CreateSpeechFallbacks](../../models/operations/createspeechfallbacks.md)[]                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                           | Array of fallback models to use if primary model fails                                                                                                                                                       |                                                                                                                                                                                                              |
| `name`                                                                                                                                                                                                       | *string*                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                           | The name to display on the trace. If not specified, the default system name will be used.                                                                                                                    |                                                                                                                                                                                                              |
| `identity`                                                                                                                                                                                                   | [components.PublicIdentity](../../models/components/publicidentity.md)                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                           | Information about the identity making the request. If the identity does not exist, it will be created automatically.                                                                                         |                                                                                                                                                                                                              |
| ~~`contact`~~                                                                                                                                                                                                | [components.PublicContact](../../models/components/publiccontact.md)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                           | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>@deprecated Use identity instead. Information about the contact making the request. |                                                                                                                                                                                                              |
| `thread`                                                                                                                                                                                                     | [operations.CreateSpeechThread](../../models/operations/createspeechthread.md)                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                           | Thread information to group related requests                                                                                                                                                                 |                                                                                                                                                                                                              |
| `loadBalancer`                                                                                                                                                                                               | *operations.CreateSpeechLoadBalancer*                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                           | Array of models with weights for load balancing requests                                                                                                                                                     | {<br/>"type": "weight_based",<br/>"models": [<br/>{<br/>"model": "openai/gpt-4o",<br/>"weight": 0.7<br/>},<br/>{<br/>"model": "anthropic/claude-3-5-sonnet",<br/>"weight": 0.3<br/>}<br/>]<br/>}             |
| `timeout`                                                                                                                                                                                                    | [operations.CreateSpeechTimeout](../../models/operations/createspeechtimeout.md)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                           | Timeout configuration to apply to the request. If the request exceeds the timeout, it will be retried or fallback to the next model if configured.                                                           |                                                                                                                                                                                                              |