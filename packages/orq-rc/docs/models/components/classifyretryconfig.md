# ClassifyRetryConfig

## Example Usage

```typescript
import { ClassifyRetryConfig } from "@orq-ai/node/models/components";

let value: ClassifyRetryConfig = {
  count: 817280,
  onCodes: [],
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `count`                                     | *number*                                    | :heavy_check_mark:                          | Number of retry attempts (1-5).             |
| `onCodes`                                   | *number*[]                                  | :heavy_check_mark:                          | HTTP status codes that trigger retry logic. |