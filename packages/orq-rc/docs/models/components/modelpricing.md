# ModelPricing

Resolved commercial pricing, including service-tier variants. Each
 variant carries a `when` CEL condition string evaluated against
 `input_tokens`, `output_tokens`, `total_tokens` and `tier`; all
 variants whose condition is true are merged onto the base pricing in
 order, later variants winning per field. Absent when this offering has
 no representable token-based pricing.

## Example Usage

```typescript
import { ModelPricing } from "@orq-ai/node/models/components";

let value: ModelPricing = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |