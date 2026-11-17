# Retry

Retry configuration for model requests. Allows customizing retry count (1-5) and HTTP status codes that trigger retries. Default codes: 408, 429, 500, 502, 503, 504, 529.

## Example Usage

```typescript
import { Retry } from "@orq-ai/node/models/operations";

let value: Retry = {
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