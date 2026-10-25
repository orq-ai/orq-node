# ResponseRetryConfig

## Example Usage

```typescript
import { ResponseRetryConfig } from "@orq-ai/node/models/components";

let value: ResponseRetryConfig = {
  count: 296968,
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                                                  | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | Number of retries per model after the initial attempt (0-5). Set 0 to disable retries. When retry is omitted, the gateway retries twice. |
| `onCodes`                                                                                                                                | *number*[]                                                                                                                               | :heavy_minus_sign:                                                                                                                       | HTTP status codes that trigger a retry. Defaults to [408, 429, 500, 502, 503, 504, 529].                                                 |