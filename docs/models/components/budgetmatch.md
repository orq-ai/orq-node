# BudgetMatch

CEL expression that decides whether a budget applies to a request. Available variables: `model`, `provider`, `model_id`, `api_key`, `identity`, `project`, `metadata` (map), `headers` (map, lowercase keys). Required unless the budget is created from a `scope`, and rejected on update when left empty. A workspace-wide budget stores an empty expression, which matches every request in the workspace. Expressions are syntax-validated at write time.

## Example Usage

```typescript
import { BudgetMatch } from "@orq-ai/node/models/components";

let value: BudgetMatch = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `cel`              | *string*           | :heavy_minus_sign: | N/A                |