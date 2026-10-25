# ClassifyRetryConfig

## Example Usage

```typescript
import { ClassifyRetryConfig } from "@orq-ai/node/models/components";

let value: ClassifyRetryConfig = {
  count: 817280,
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `count`                                                                                                                                                                              | *number*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | Number of retries per model after the initial attempt (0-5). Set 0 to disable retries. When retry is omitted, the gateway retries twice.                                             |
| `onCodes`                                                                                                                                                                            | *number*[]                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                   | HTTP status codes that trigger retries, between 100 and 599. Defaults to [408, 429, 500, 502, 503, 504, 529]. Retry-After is honored; otherwise the gateway backs off exponentially. |