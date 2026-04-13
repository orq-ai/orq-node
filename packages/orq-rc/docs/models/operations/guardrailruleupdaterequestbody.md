# GuardrailRuleUpdateRequestBody

## Example Usage

```typescript
import { GuardrailRuleUpdateRequestBody } from "@orq-ai/node/models/operations";

let value: GuardrailRuleUpdateRequestBody = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `description`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `displayName`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `enabled`                                                            | *boolean*                                                            | :heavy_minus_sign:                                                   | N/A                                                                  |
| `expression`                                                         | [components.Expression](../../models/components/expression.md)       | :heavy_minus_sign:                                                   | N/A                                                                  |
| `guardrails`                                                         | [components.GuardrailRef](../../models/components/guardrailref.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |
| `timeout`                                                            | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |