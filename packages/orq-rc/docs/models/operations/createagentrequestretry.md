# CreateAgentRequestRetry

Retry configuration for model requests. Allows customizing retry count (1-5) and HTTP status codes that trigger retries. Default codes: [429]. Common codes: 500 (internal error), 429 (rate limit), 502/503/504 (gateway errors).

## Example Usage

```typescript
import { CreateAgentRequestRetry } from "@orq-ai/node/models/operations";

let value: CreateAgentRequestRetry = {
  onCodes: [
    429,
    500,
    502,
    503,
    504,
  ],
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `count`                                    | *number*                                   | :heavy_minus_sign:                         | Number of retry attempts (1-5)             | 3                                          |
| `onCodes`                                  | *number*[]                                 | :heavy_minus_sign:                         | HTTP status codes that trigger retry logic | [<br/>429,<br/>500,<br/>502,<br/>503,<br/>504<br/>] |