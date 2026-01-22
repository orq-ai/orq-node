# RunAgentModelConfigurationAgentsRetry

Retry configuration for model requests. Retries are triggered for specific HTTP status codes (e.g., 500, 429, 502, 503, 504). Supports configurable retry count (1-5) and custom status codes.

## Example Usage

```typescript
import { RunAgentModelConfigurationAgentsRetry } from "@orq-ai/node/models/operations";

let value: RunAgentModelConfigurationAgentsRetry = {
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