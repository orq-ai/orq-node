# ProviderBudgetScope

Per-provider cap. The value is the provider enum string (e.g.
 "openai", "anthropic") drawn from ModelIntegrationIdentifier.

## Example Usage

```typescript
import { ProviderBudgetScope } from "@orq-ai/node/models/components";

let value: ProviderBudgetScope = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `provider`         | *string*           | :heavy_minus_sign: | N/A                |