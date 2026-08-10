# UpdateGuardrailRuleRequest

## Example Usage

```typescript
import { UpdateGuardrailRuleRequest } from "@orq-ai/node/models/components";

let value: UpdateGuardrailRuleRequest = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `displayName`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `expression`                                                                             | [components.GuardrailRuleExpression](../../models/components/guardrailruleexpression.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `guardrails`                                                                             | [components.GuardrailRuleGuardrail](../../models/components/guardrailruleguardrail.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `plugins`                                                                                | [components.GuardrailRulePlugin](../../models/components/guardrailruleplugin.md)[]       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `timeout`                                                                                | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |