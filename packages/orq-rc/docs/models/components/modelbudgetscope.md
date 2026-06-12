# ModelBudgetScope

Per-model cap. The value is the FULL model reference as callers send
 it ("openai/gpt-4o", or "workspaceKey@openai/gpt-4o" for private
 models) — NOT the Mongo `_id` of the model master-data document.

## Example Usage

```typescript
import { ModelBudgetScope } from "@orq-ai/node/models/components";

let value: ModelBudgetScope = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `modelId`          | *string*           | :heavy_minus_sign: | N/A                |