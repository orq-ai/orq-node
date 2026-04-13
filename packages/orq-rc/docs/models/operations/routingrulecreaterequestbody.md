# RoutingRuleCreateRequestBody

## Example Usage

```typescript
import { RoutingRuleCreateRequestBody } from "@orq-ai/node/models/operations";

let value: RoutingRuleCreateRequestBody = {
  displayName: "Nathan_Kutch",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `description`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `displayName`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `enabled`                                                                    | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          |
| `expression`                                                                 | [components.Expression](../../models/components/expression.md)               | :heavy_minus_sign:                                                           | N/A                                                                          |
| `modelsConfig`                                                               | [components.ModelsConfig](../../models/components/modelsconfig.md)           | :heavy_minus_sign:                                                           | N/A                                                                          |
| `priority`                                                                   | *number*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          |
| `projectId`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | Optional project ID. If null/omitted, the entity is global (workspace-wide). |