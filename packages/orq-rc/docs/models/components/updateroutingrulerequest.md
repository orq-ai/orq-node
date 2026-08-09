# UpdateRoutingRuleRequest

## Example Usage

```typescript
import { UpdateRoutingRuleRequest } from "@orq-ai/node/models/components";

let value: UpdateRoutingRuleRequest = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `displayName`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `expression`                                                                             | [components.RoutingRuleExpression](../../models/components/routingruleexpression.md)     | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `modelsConfig`                                                                           | [components.RoutingRuleModelsConfig](../../models/components/routingrulemodelsconfig.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `plugins`                                                                                | [components.RoutingRulePlugin](../../models/components/routingruleplugin.md)[]           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `priority`                                                                               | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `cacheConfig`                                                                            | [components.RoutingRuleCacheConfig](../../models/components/routingrulecacheconfig.md)   | :heavy_minus_sign:                                                                       | N/A                                                                                      |