# GuardrailRule

## Example Usage

```typescript
import { GuardrailRule } from "@orq-ai/node/models/components";

let value: GuardrailRule = {
  id: "<id>",
  createdAt: new Date("2026-08-07T05:20:53.545Z"),
  updatedAt: new Date("2025-03-09T10:24:23.361Z"),
  createdById: "<id>",
  updatedById: "<id>",
  projectId: "<id>",
  displayName: "Noemy.Zemlak78",
  description: "pro usually table geez presell supposing dreary royal frizzy",
  enabled: false,
  guardrails: [],
  plugins: [
    {},
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdById`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedById`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Project that contains the rule. Empty for workspace-wide rules.                               |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Human-readable guardrail-rule name.                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expression`                                                                                  | [components.GuardrailRuleExpression](../../models/components/guardrailruleexpression.md)      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `guardrails`                                                                                  | [components.GuardrailRuleGuardrail](../../models/components/guardrailruleguardrail.md)[]      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `plugins`                                                                                     | [components.GuardrailRulePlugin](../../models/components/guardrailruleplugin.md)[]            | :heavy_check_mark:                                                                            | N/A                                                                                           |