# Usage

Usage statistics to add to the deployment

## Example Usage

```typescript
import { Usage } from "@orq-ai/node/models/operations";

let value: Usage = {
  promptTokens: 4579.97,
  completionTokens: 7830.71,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `promptTokens`                                                    | *number*                                                          | :heavy_check_mark:                                                | Number of tokens in the prompt.                                   |
| `completionTokens`                                                | *number*                                                          | :heavy_check_mark:                                                | Number of tokens in the generated completion.                     |
| `totalTokens`                                                     | *number*                                                          | :heavy_minus_sign:                                                | Total number of tokens used in the request (prompt + completion). |