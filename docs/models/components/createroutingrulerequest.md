# CreateRoutingRuleRequest

## Example Usage

```typescript
import { CreateRoutingRuleRequest } from "@orq-ai/node/models/components";

let value: CreateRoutingRuleRequest = {
  displayName: "Noemie70",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `displayName`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `projectId`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | Optional project scope. Omit for a workspace-wide rule.                                  |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_minus_sign:                                                                       | Whether the rule is active. Defaults to false when omitted.                              |
| `expression`                                                                             | [components.RoutingRuleExpression](../../models/components/routingruleexpression.md)     | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `modelsConfig`                                                                           | [components.RoutingRuleModelsConfig](../../models/components/routingrulemodelsconfig.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `plugins`                                                                                | [components.RoutingRulePlugin](../../models/components/routingruleplugin.md)[]           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `priority`                                                                               | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `cacheConfig`                                                                            | [components.RoutingRuleCacheConfig](../../models/components/routingrulecacheconfig.md)   | :heavy_minus_sign:                                                                       | N/A                                                                                      |