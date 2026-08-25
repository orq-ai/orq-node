# GuardrailRuleExpression

## Example Usage

```typescript
import { GuardrailRuleExpression } from "@orq-ai/node/models/components";

let value: GuardrailRuleExpression = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `config`                                                                    | [components.Config](../../models/components/config.md)                      | :heavy_minus_sign:                                                          | N/A                                                                         |
| `cel`                                                                       | *string*                                                                    | :heavy_minus_sign:                                                          | CEL expression used to match requests. Empty means the rule always matches. |