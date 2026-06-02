# PublicEmbeddingUsage

## Example Usage

```typescript
import { PublicEmbeddingUsage } from "@orq-ai/node/models/components";

let value: PublicEmbeddingUsage = {
  promptTokens: 876954,
  totalTokens: 783688,
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `promptTokens`                                  | *number*                                        | :heavy_check_mark:                              | The number of tokens used by the prompt.        |
| `totalTokens`                                   | *number*                                        | :heavy_check_mark:                              | The total number of tokens used by the request. |