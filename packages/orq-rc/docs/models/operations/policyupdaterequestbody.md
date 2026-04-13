# PolicyUpdateRequestBody

## Example Usage

```typescript
import { PolicyUpdateRequestBody } from "@orq-ai/node/models/operations";

let value: PolicyUpdateRequestBody = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `description`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `displayName`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `enabled`                                                            | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `evaluators`                                                         | [components.EvaluatorRef](../../models/components/evaluatorref.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |
| `limits`                                                             | [components.Limits](../../models/components/limits.md)               | :heavy_minus_sign:                                                   | N/A                                                                  |
| `modelsConfig`                                                       | [components.ModelsConfig](../../models/components/modelsconfig.md)   | :heavy_minus_sign:                                                   | N/A                                                                  |
| `retryConfig`                                                        | [components.RetryConfig](../../models/components/retryconfig.md)     | :heavy_minus_sign:                                                   | N/A                                                                  |
| `timeout`                                                            | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |