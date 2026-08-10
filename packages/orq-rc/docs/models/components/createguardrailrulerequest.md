# CreateGuardrailRuleRequest

## Example Usage

```typescript
import { CreateGuardrailRuleRequest } from "@orq-ai/node/models/components";

let value: CreateGuardrailRuleRequest = {
  displayName: "Elnora36",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `displayName`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `projectId`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | Optional project scope. Omit for a workspace-wide rule.                                  |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_minus_sign:                                                                       | Whether the rule is active. Defaults to false when omitted.                              |
| `expression`                                                                             | [components.GuardrailRuleExpression](../../models/components/guardrailruleexpression.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `guardrails`                                                                             | [components.GuardrailRuleGuardrail](../../models/components/guardrailruleguardrail.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `plugins`                                                                                | [components.GuardrailRulePlugin](../../models/components/guardrailruleplugin.md)[]       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `timeout`                                                                                | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |