# ResponseRetryConfig

## Example Usage

```typescript
import { ResponseRetryConfig } from "@orq-ai/node/models/components";

let value: ResponseRetryConfig = {
  count: 296968,
  onCodes: [
    142561,
    872498,
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `count`                                                             | *number*                                                            | :heavy_check_mark:                                                  | Number of retries (1-5).                                            |
| `onCodes`                                                           | *number*[]                                                          | :heavy_check_mark:                                                  | HTTP status codes that trigger a retry (e.g. [429, 500, 502, 503]). |