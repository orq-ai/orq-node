# AutoRouterConfig

## Example Usage

```typescript
import { AutoRouterConfig } from "@orq-ai/node/models/components";

let value: AutoRouterConfig = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `benchmarkModel`                                                                     | *string*                                                                             | :heavy_minus_sign:                                                                   | Catalog model whose benchmarks this private model copies to join Smart Router pools. |
| `economicalModel`                                                                    | *string*                                                                             | :heavy_minus_sign:                                                                   | Model used when the router classifies a request as simple.                           |
| `id`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | Identifier of the Smart Router configuration.                                        |
| `models`                                                                             | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Models the router chooses from, written as provider/model_id.                        |
| `profile`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | Routing preference: quality, balanced, or cost.                                      |
| `sessionAffinity`                                                                    | [components.SessionAffinityConfig](../../models/components/sessionaffinityconfig.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `strongModel`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | Model used when the router classifies a request as complex.                          |
| `v2`                                                                                 | [components.AutoRouterV2Config](../../models/components/autorouterv2config.md)       | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `version`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | Version of the Smart Router configuration format.                                    |