# GuardrailRuleCreateResponseBody

Guardrail rule created successfully

## Example Usage

```typescript
import { GuardrailRuleCreateResponseBody } from "@orq-ai/node/models/operations";

let value: GuardrailRuleCreateResponseBody = {
  id: "<id>",
  createdAt: new Date("2026-05-29T05:51:32.841Z"),
  createdById: "<id>",
  displayName: "Gerson.Rippin-Homenick34",
  enabled: true,
  projectId: "<id>",
  timeout: 372529,
  updatedAt: new Date("2026-12-17T15:31:09.021Z"),
  updatedById: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdById`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expression`                                                                                  | [components.Expression](../../models/components/expression.md)                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `guardrails`                                                                                  | [components.GuardrailRef](../../models/components/guardrailref.md)[]                          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `timeout`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedById`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |