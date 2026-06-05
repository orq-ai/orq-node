# CreateIdentityRequest

## Example Usage

```typescript
import { CreateIdentityRequest } from "@orq-ai/node/models/components";

let value: CreateIdentityRequest = {
  externalId: "<id>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `externalId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | Customer-provided stable identifier for this identity. Must be unique<br/> within the workspace.     |
| `displayName`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Human-readable display name for the identity.                                                        |
| `email`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Email address associated with the identity.                                                          |
| `avatarUrl`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | URL of the identity avatar image.                                                                    |
| `tags`                                                                                               | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | Free-form labels used to organize and filter identities.                                             |
| `metadata`                                                                                           | [components.CreateIdentityRequestMetadata](../../models/components/createidentityrequestmetadata.md) | :heavy_minus_sign:                                                                                   | Custom JSON metadata stored with the identity.                                                       |