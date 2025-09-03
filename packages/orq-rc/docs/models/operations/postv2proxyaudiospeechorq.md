# PostV2ProxyAudioSpeechOrq

## Example Usage

```typescript
import { PostV2ProxyAudioSpeechOrq } from "@orq-ai/node/models/operations";

let value: PostV2ProxyAudioSpeechOrq = {
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
  contact: {
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
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `retry`                                                                                                            | [operations.PostV2ProxyAudioSpeechRetry](../../models/operations/postv2proxyaudiospeechretry.md)                   | :heavy_minus_sign:                                                                                                 | Retry configuration for the request                                                                                |
| `fallbacks`                                                                                                        | [operations.PostV2ProxyAudioSpeechFallbacks](../../models/operations/postv2proxyaudiospeechfallbacks.md)[]         | :heavy_minus_sign:                                                                                                 | Array of fallback models to use if primary model fails                                                             |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The name to display on the trace. If not specified, the default system name will be used.                          |
| `contact`                                                                                                          | [components.PublicContact](../../models/components/publiccontact.md)                                               | :heavy_minus_sign:                                                                                                 | Information about the contact making the request. If the contact does not exist, it will be created automatically. |
| `thread`                                                                                                           | [operations.PostV2ProxyAudioSpeechThread](../../models/operations/postv2proxyaudiospeechthread.md)                 | :heavy_minus_sign:                                                                                                 | Thread information to group related requests                                                                       |