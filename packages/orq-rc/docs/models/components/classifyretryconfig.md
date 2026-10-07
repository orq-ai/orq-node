# ClassifyRetryConfig

## Example Usage

```typescript
import { ClassifyRetryConfig } from "@orq-ai/node/models/components";

let value: ClassifyRetryConfig = {
  count: 817280,
  onCodes: [
    181592,
    341271,
    57682,
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `count`                                                                                                                      | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | Number of retries per model after the initial attempt (1-5). No retries are made when retry is omitted.                      |
| `onCodes`                                                                                                                    | *number*[]                                                                                                                   | :heavy_check_mark:                                                                                                           | HTTP status codes that trigger retries, between 100 and 599. Retry-After is honored; otherwise the gateway waits one second. |