# AutoRouterV2Config

## Example Usage

```typescript
import { AutoRouterV2Config } from "@orq-ai/node/models/components";

let value: AutoRouterV2Config = {
  intelligenceIndex: 3491.62,
  price: 3531.21,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `aaSlug`                                                                                                   | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `defaultEffort`                                                                                            | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `intelligenceIndex`                                                                                        | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `price`                                                                                                    | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `reasoningEfforts`                                                                                         | Record<string, [components.AutoRouterV2EffortConfig](../../models/components/autorouterv2effortconfig.md)> | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |