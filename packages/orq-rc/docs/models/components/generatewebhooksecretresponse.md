# GenerateWebhookSecretResponse

A newly generated webhook signing secret.

## Example Usage

```typescript
import { GenerateWebhookSecretResponse } from "@orq-ai/node/models/components";

let value: GenerateWebhookSecretResponse = {
  secret: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `secret`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | Signing secret to supply when creating or updating a webhook. Store it securely. |