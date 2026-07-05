# ApiKeyBudgetScope

Per-api-key cap. Replaces the legacy embedded `constraints.budget`
 on auth.apiKeys.

## Example Usage

```typescript
import { ApiKeyBudgetScope } from "@orq-ai/node/models/components";

let value: ApiKeyBudgetScope = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `apiKeyId`         | *string*           | :heavy_minus_sign: | N/A                |