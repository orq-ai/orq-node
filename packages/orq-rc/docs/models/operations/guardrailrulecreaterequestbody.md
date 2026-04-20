# GuardrailRuleCreateRequestBody

## Example Usage

```typescript
import { GuardrailRuleCreateRequestBody } from "@orq-ai/node/models/operations";

let value: GuardrailRuleCreateRequestBody = {
  displayName: "Thad54",
  expression: {
    cel: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `description`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `displayName`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `enabled`                                                                    | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `expression`                                                                 | [components.ExpressionInput](../../models/components/expressioninput.md)     | :heavy_check_mark:                                                           | N/A                                                                          |
| `guardrails`                                                                 | [components.GuardrailRef](../../models/components/guardrailref.md)[]         | :heavy_minus_sign:                                                           | N/A                                                                          |
| `projectId`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | Optional project ID. If null/omitted, the entity is global (workspace-wide). |
| `timeout`                                                                    | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |