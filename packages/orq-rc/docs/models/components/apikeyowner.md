# ApiKeyOwner

Owner attribution drives lifecycle.

 `service_account` keys are workspace-owned and outlive any individual
 user. `user` keys are bound to `user_id`: when the user is removed,
 disabled, or loses project access, the key is revoked / its scope
 shrinks per the cascade rules in ADR 0001.

## Example Usage

```typescript
import { ApiKeyOwner } from "@orq-ai/node/models/components";

let value: ApiKeyOwner = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `user`                                                                           | [components.UserOwner](../../models/components/userowner.md)                     | :heavy_minus_sign:                                                               | N/A                                                                              |
| `serviceAccount`                                                                 | [components.ServiceAccountOwner](../../models/components/serviceaccountowner.md) | :heavy_minus_sign:                                                               | N/A                                                                              |