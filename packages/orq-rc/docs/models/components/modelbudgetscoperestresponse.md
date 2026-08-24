# ModelBudgetScopeRestResponse

Per-model cap. The value is the FULL model reference as callers send
 it ("openai/gpt-4o", or "workspaceKey@openai/gpt-4o" for private
 models), rather than an internal identifier.

## Example Usage

```typescript
import { ModelBudgetScopeRestResponse } from "@orq-ai/node/models/components";

let value: ModelBudgetScopeRestResponse = {
  modelId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `modelId`          | *string*           | :heavy_check_mark: | N/A                |