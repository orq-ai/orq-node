# RoutingRuleExpression

## Example Usage

```typescript
import { RoutingRuleExpression } from "@orq-ai/node/models/components";

let value: RoutingRuleExpression = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `config`                                                                    | [components.Config](../../models/components/config.md)                      | :heavy_minus_sign:                                                          | N/A                                                                         |
| `cel`                                                                       | *string*                                                                    | :heavy_minus_sign:                                                          | CEL expression used to match requests. Empty means the rule always matches. |