# EvaluatorRetryConfig

## Example Usage

```typescript
import { EvaluatorRetryConfig } from "@orq-ai/node/models/components";

let value: EvaluatorRetryConfig = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `count`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | Retries after the first attempt. Zero disables retries; omitted retry preserves existing policy. |
| `onCodes`                                                                                        | *number*[]                                                                                       | :heavy_minus_sign:                                                                               | Omitted uses the gateway's default transient status codes.                                       |