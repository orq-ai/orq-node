# CreateEmbeddingFallbacks

## Example Usage

```typescript
import { CreateEmbeddingFallbacks } from "@orq-ai/node/models/operations";

let value: CreateEmbeddingFallbacks = {
  model: "openai/text-embedding-3-small",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   | Example                       |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `model`                       | *string*                      | :heavy_check_mark:            | Fallback model identifier     | openai/text-embedding-3-small |