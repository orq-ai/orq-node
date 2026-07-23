# CountWebhooksResponse

Webhook count for the current workspace.

## Example Usage

```typescript
import { CountWebhooksResponse } from "@orq-ai/node/models/components";

let value: CountWebhooksResponse = {
  total: 743275,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `total`                                            | *number*                                           | :heavy_check_mark:                                 | Total number of webhooks in the current workspace. |