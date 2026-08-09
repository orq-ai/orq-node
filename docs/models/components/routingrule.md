# RoutingRule

## Example Usage

```typescript
import { RoutingRule } from "@orq-ai/node/models/components";

let value: RoutingRule = {
  id: "<id>",
  createdAt: new Date("2025-08-11T13:53:30.664Z"),
  updatedAt: new Date("2025-03-05T21:32:43.196Z"),
  createdById: "<id>",
  updatedById: "<id>",
  projectId: "<id>",
  displayName: "Ambrose_Lesch69",
  description:
    "prioritize but intent oof meh clone pharmacopoeia immediately once intrepid",
  enabled: false,
  plugins: [
    {},
  ],
  priority: 396762,
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
| `displayName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Human-readable routing-rule name.                                                             |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expression`                                                                                  | [components.RoutingRuleExpression](../../models/components/routingruleexpression.md)          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `modelsConfig`                                                                                | [components.RoutingRuleModelsConfig](../../models/components/routingrulemodelsconfig.md)      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `plugins`                                                                                     | [components.RoutingRulePlugin](../../models/components/routingruleplugin.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `priority`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | Evaluation order. Lower values are evaluated first.                                           |
| `cacheConfig`                                                                                 | [components.RoutingRuleCacheConfig](../../models/components/routingrulecacheconfig.md)        | :heavy_minus_sign:                                                                            | N/A                                                                                           |