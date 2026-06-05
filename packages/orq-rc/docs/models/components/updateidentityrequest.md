# UpdateIdentityRequest

## Example Usage

```typescript
import { UpdateIdentityRequest } from "@orq-ai/node/models/components";

let value: UpdateIdentityRequest = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `displayName`                                                                                        | *string*                                                                                             | :heavy_minus_sign:                                                                                   | New display name. Omit to keep the current display name.                                             |
| `email`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | New email address. Omit to keep the current email.                                                   |
| `avatarUrl`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | New avatar image URL. Omit to keep the current avatar URL.                                           |
| `tags`                                                                                               | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | Replacement tag list. Leave empty to clear tags.                                                     |
| `metadata`                                                                                           | [components.UpdateIdentityRequestMetadata](../../models/components/updateidentityrequestmetadata.md) | :heavy_minus_sign:                                                                                   | Replacement custom JSON metadata.                                                                    |