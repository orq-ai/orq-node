# UpdateAgentFallbackModelConfigurationAgentsRetry

Retry configuration for this fallback model. Allows customizing retry count (1-5) and HTTP status codes that trigger retries.

## Example Usage

```typescript
import { UpdateAgentFallbackModelConfigurationAgentsRetry } from "@orq-ai/node/models/operations";

let value: UpdateAgentFallbackModelConfigurationAgentsRetry = {
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