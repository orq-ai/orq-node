# EmbeddingRetryConfig

## Example Usage

```typescript
import { EmbeddingRetryConfig } from "@orq-ai/node/models/components";

let value: EmbeddingRetryConfig = {
  count: 289108,
  onCodes: [
    529292,
    38334,
  ],
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `count`                                     | *number*                                    | :heavy_check_mark:                          | Number of retry attempts (1-5).             |
| `onCodes`                                   | *number*[]                                  | :heavy_check_mark:                          | HTTP status codes that trigger retry logic. |