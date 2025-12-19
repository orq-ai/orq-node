# Orq

Leverage Orq's intelligent routing capabilities to enhance your AI application with enterprise-grade reliability and observability. Orq provides automatic request management including retries on failures, model fallbacks for high availability, contact-level analytics tracking, conversation threading, and dynamic prompt templating with variable substitution.

## Example Usage

```typescript
import { Orq } from "@orq-ai/node/models/operations";

let value: Orq = {
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
  timeout: {
    callTimeout: 30000,
  },
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                             | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | The name to display on the trace. If not specified, the default system name will be used.                                                          |                                                                                                                                                    |
| `retry`                                                                                                                                            | [operations.CreateChatCompletionRetry](../../models/operations/createchatcompletionretry.md)                                                       | :heavy_minus_sign:                                                                                                                                 | Retry configuration for the request                                                                                                                |                                                                                                                                                    |
| `fallbacks`                                                                                                                                        | [operations.Fallbacks](../../models/operations/fallbacks.md)[]                                                                                     | :heavy_minus_sign:                                                                                                                                 | Array of fallback models to use if primary model fails                                                                                             |                                                                                                                                                    |
| `prompt`                                                                                                                                           | [operations.Prompt](../../models/operations/prompt.md)                                                                                             | :heavy_minus_sign:                                                                                                                                 | Prompt configuration for the request                                                                                                               |                                                                                                                                                    |
| `contact`                                                                                                                                          | [components.PublicContact](../../models/components/publiccontact.md)                                                                               | :heavy_minus_sign:                                                                                                                                 | Information about the contact making the request. If the contact does not exist, it will be created automatically.                                 |                                                                                                                                                    |
| `thread`                                                                                                                                           | [operations.CreateChatCompletionThread](../../models/operations/createchatcompletionthread.md)                                                     | :heavy_minus_sign:                                                                                                                                 | Thread information to group related requests                                                                                                       |                                                                                                                                                    |
| `inputs`                                                                                                                                           | *operations.Inputs*                                                                                                                                | :heavy_minus_sign:                                                                                                                                 | Values to replace in the prompt messages using {{variableName}} syntax                                                                             | {<br/>"customer_name": "John Smith",<br/>"product_name": "Premium Plan",<br/>"issue_type": "billing"<br/>}                                         |
| `cache`                                                                                                                                            | [operations.Cache](../../models/operations/cache.md)                                                                                               | :heavy_minus_sign:                                                                                                                                 | Cache configuration for the request.                                                                                                               |                                                                                                                                                    |
| `knowledgeBases`                                                                                                                                   | [operations.CreateChatCompletionKnowledgeBases](../../models/operations/createchatcompletionknowledgebases.md)[]                                   | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |                                                                                                                                                    |
| `loadBalancer`                                                                                                                                     | *operations.LoadBalancer*[]                                                                                                                        | :heavy_minus_sign:                                                                                                                                 | Array of models with weights for load balancing requests                                                                                           | [<br/>{<br/>"model": "openai/gpt-4o",<br/>"weight": 0.7<br/>},<br/>{<br/>"model": "anthropic/claude-3-5-sonnet",<br/>"weight": 0.3<br/>}<br/>]     |
| `timeout`                                                                                                                                          | [operations.Timeout](../../models/operations/timeout.md)                                                                                           | :heavy_minus_sign:                                                                                                                                 | Timeout configuration to apply to the request. If the request exceeds the timeout, it will be retried or fallback to the next model if configured. |                                                                                                                                                    |