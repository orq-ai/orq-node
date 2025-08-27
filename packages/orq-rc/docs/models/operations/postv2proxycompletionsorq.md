# PostV2ProxyCompletionsOrq

Leverage Orq's intelligent routing capabilities to enhance your AI application with enterprise-grade reliability and observability. Orq provides automatic request management including retries on failures, model fallbacks for high availability, contact-level analytics tracking, conversation threading, and dynamic prompt templating with variable substitution.

## Example Usage

```typescript
import { PostV2ProxyCompletionsOrq } from "@orq-ai/node/models/operations";

let value: PostV2ProxyCompletionsOrq = {
  retry: {
    onCodes: [
      429,
      500,
      502,
    ],
  },
  fallbacks: [
    {
      model: "openai/gpt-5",
    },
    {
      model: "anthropic/claude-4-opus",
    },
  ],
  contact: {
    id: "contact_01ARZ3NDEKTSV4RRFFQ69G5FAV",
    displayName: "Jane Doe",
    email: "jane.doe@example.com",
  },
  thread: {
    id: "thread_01ARZ3NDEKTSV4RRFFQ69G5FAV",
    tags: [
      "customer-support",
    ],
  },
  inputs: {
    "customer_name": "John Smith",
    "issue_type": "billing",
  },
  cache: {
    ttl: 3600,
    type: "exact_match",
  },
  knowledgeBases: [
    {
      topK: 5,
      knowledgeId: "knowledge_01ARZ3NDEKTSV4RRFFQ69G5FAV",
    },
  ],
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The name to display on the trace. If not specified, the default system name will be used.                            |                                                                                                                      |
| `retry`                                                                                                              | [operations.PostV2ProxyCompletionsRetry](../../models/operations/postv2proxycompletionsretry.md)                     | :heavy_minus_sign:                                                                                                   | Retry configuration for the request                                                                                  |                                                                                                                      |
| `fallbacks`                                                                                                          | [operations.PostV2ProxyCompletionsFallbacks](../../models/operations/postv2proxycompletionsfallbacks.md)[]           | :heavy_minus_sign:                                                                                                   | Array of fallback models to use if primary model fails                                                               |                                                                                                                      |
| `prompt`                                                                                                             | [operations.PostV2ProxyCompletionsPrompt](../../models/operations/postv2proxycompletionsprompt.md)                   | :heavy_minus_sign:                                                                                                   | Prompt configuration for the request                                                                                 |                                                                                                                      |
| `contact`                                                                                                            | [components.PublicContact](../../models/components/publiccontact.md)                                                 | :heavy_minus_sign:                                                                                                   | Information about the contact making the request. If the contact does not exist, it will be created automatically.   |                                                                                                                      |
| `thread`                                                                                                             | [operations.PostV2ProxyCompletionsThread](../../models/operations/postv2proxycompletionsthread.md)                   | :heavy_minus_sign:                                                                                                   | Thread information to group related requests                                                                         |                                                                                                                      |
| `inputs`                                                                                                             | Record<string, *any*>                                                                                                | :heavy_minus_sign:                                                                                                   | Values to replace in the prompt messages using {{variableName}} syntax                                               | {<br/>"customer_name": "John Smith",<br/>"product_name": "Premium Plan",<br/>"issue_type": "billing"<br/>}           |
| `cache`                                                                                                              | [operations.PostV2ProxyCompletionsCache](../../models/operations/postv2proxycompletionscache.md)                     | :heavy_minus_sign:                                                                                                   | Cache configuration for the request.                                                                                 |                                                                                                                      |
| `knowledgeBases`                                                                                                     | [operations.PostV2ProxyCompletionsKnowledgeBases](../../models/operations/postv2proxycompletionsknowledgebases.md)[] | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |