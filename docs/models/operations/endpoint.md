# Endpoint

Endpoint each line is sent to. The batch model must support it.

## Example Usage

```typescript
import { Endpoint } from "@orq-ai/node/models/operations";

let value: Endpoint = "/v3/router/decisions";
```

## Values

```typescript
"/v1/responses" | "/v1/chat/completions" | "/v1/embeddings" | "/v1/completions" | "/v1/moderations" | "/v3/router/decisions"
```