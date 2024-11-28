# CreateContactRequestBody

Update user information payload

## Example Usage

```typescript
import { CreateContactRequestBody } from "@orq-ai/node/models/operations";

let value: CreateContactRequestBody = {
  externalId: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `externalId`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | Unique string value to identify the contact user in the customer's system |
| `displayName`                                                             | *string*                                                                  | :heavy_minus_sign:                                                        | Display name or nickname of the user                                      |
| `email`                                                                   | *string*                                                                  | :heavy_minus_sign:                                                        | Email address of the user                                                 |
| `avatarUrl`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | URL linking to the user's avatar image                                    |
| `tags`                                                                    | *string*[]                                                                | :heavy_minus_sign:                                                        | Array of UUIDs representing tags associated with the user                 |
| `metadata`                                                                | Record<string, *any*>                                                     | :heavy_minus_sign:                                                        | Additional custom metadata associated with the user as key-value pairs    |