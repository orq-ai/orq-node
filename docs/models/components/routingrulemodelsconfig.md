# RoutingRuleModelsConfig

## Example Usage

```typescript
import { RoutingRuleModelsConfig } from "@orq-ai/node/models/components";

let value: RoutingRuleModelsConfig = {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                                                                                                                                   | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | Load-balancing mode.                                                                                                                     |
| `models`                                                                                                                                 | [components.RoutingRuleModel](../../models/components/routingrulemodel.md)[]                                                             | :heavy_minus_sign:                                                                                                                       | N/A                                                                                                                                      |
| `fallbackOnCodes`                                                                                                                        | *number*[]                                                                                                                               | :heavy_minus_sign:                                                                                                                       | HTTP error status codes that trigger fallback. Only allowed in fallback mode. Empty uses the default: 408, 429, 500, 502, 503, 504, 529. |