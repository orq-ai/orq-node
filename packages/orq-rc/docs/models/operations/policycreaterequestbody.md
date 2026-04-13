# PolicyCreateRequestBody

## Example Usage

```typescript
import { PolicyCreateRequestBody } from "@orq-ai/node/models/operations";

let value: PolicyCreateRequestBody = {
  displayName: "Dorthy_Murray47",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `description`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `displayName`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `enabled`                                                                    | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `evaluators`                                                                 | [components.EvaluatorRef](../../models/components/evaluatorref.md)[]         | :heavy_minus_sign:                                                           | N/A                                                                          |
| `limits`                                                                     | [components.Limits](../../models/components/limits.md)                       | :heavy_minus_sign:                                                           | N/A                                                                          |
| `modelsConfig`                                                               | [components.ModelsConfig](../../models/components/modelsconfig.md)           | :heavy_minus_sign:                                                           | N/A                                                                          |
| `projectId`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | Optional project ID. If null/omitted, the entity is global (workspace-wide). |
| `retryConfig`                                                                | [components.RetryConfig](../../models/components/retryconfig.md)             | :heavy_minus_sign:                                                           | N/A                                                                          |
| `timeout`                                                                    | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |