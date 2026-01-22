# CreateEmbeddingUsage

The usage information for the request.

## Example Usage

```typescript
import { CreateEmbeddingUsage } from "@orq-ai/node/models/operations";

let value: CreateEmbeddingUsage = {
  promptTokens: 2291.22,
  totalTokens: 6488.07,
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `promptTokens`                                  | *number*                                        | :heavy_check_mark:                              | The number of tokens used by the prompt.        |
| `totalTokens`                                   | *number*                                        | :heavy_check_mark:                              | The total number of tokens used by the request. |