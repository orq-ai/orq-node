# PostV2ProxyImagesGenerationsOrq

## Example Usage

```typescript
import { PostV2ProxyImagesGenerationsOrq } from "@orq-ai/node/models/operations";

let value: PostV2ProxyImagesGenerationsOrq = {
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
  cache: {
    ttl: 3600,
    type: "exact_match",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The name to display on the trace. If not specified, the default system name will be used.                              |
| `retry`                                                                                                                | [operations.PostV2ProxyImagesGenerationsRetry](../../models/operations/postv2proxyimagesgenerationsretry.md)           | :heavy_minus_sign:                                                                                                     | Retry configuration for the request                                                                                    |
| `fallbacks`                                                                                                            | [operations.PostV2ProxyImagesGenerationsFallbacks](../../models/operations/postv2proxyimagesgenerationsfallbacks.md)[] | :heavy_minus_sign:                                                                                                     | Array of fallback models to use if primary model fails                                                                 |
| `contact`                                                                                                              | [components.PublicContact](../../models/components/publiccontact.md)                                                   | :heavy_minus_sign:                                                                                                     | Information about the contact making the request. If the contact does not exist, it will be created automatically.     |
| `thread`                                                                                                               | [operations.PostV2ProxyImagesGenerationsThread](../../models/operations/postv2proxyimagesgenerationsthread.md)         | :heavy_minus_sign:                                                                                                     | Thread information to group related requests                                                                           |
| `cache`                                                                                                                | [operations.PostV2ProxyImagesGenerationsCache](../../models/operations/postv2proxyimagesgenerationscache.md)           | :heavy_minus_sign:                                                                                                     | Cache configuration for the request.                                                                                   |