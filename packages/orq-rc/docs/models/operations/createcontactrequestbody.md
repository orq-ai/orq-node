# CreateContactRequestBody

Contact profile information

## Example Usage

```typescript
import { CreateContactRequestBody } from "@orq-ai/node/models/operations";

let value: CreateContactRequestBody = {
  externalId: "user_12345",
  displayName: "Jane Smith",
  email: "jane.smith@example.com",
  avatarUrl: "https://example.com/avatars/jane-smith.jpg",
  tags: [
    "premium",
    "beta-user",
    "enterprise",
  ],
  metadata: {
    "department": "Engineering",
    "role": "Senior Developer",
    "subscription_tier": "premium",
    "last_login": "2024-01-15T10:30:00Z",
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          | Example                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `externalId`                                                                                                                                         | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | Unique string value to identify the contact user in the customer's system. This should be the same ID you use in your system to reference this user. | user_12345                                                                                                                                           |
| `displayName`                                                                                                                                        | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | Display name or nickname of the contact user. This is typically shown in user interfaces.                                                            | Jane Smith                                                                                                                                           |
| `email`                                                                                                                                              | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | Email address of the contact user                                                                                                                    | jane.smith@example.com                                                                                                                               |
| `avatarUrl`                                                                                                                                          | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | URL linking to the contact user's avatar image                                                                                                       | https://example.com/avatars/jane-smith.jpg                                                                                                           |
| `tags`                                                                                                                                               | *string*[]                                                                                                                                           | :heavy_minus_sign:                                                                                                                                   | Array of tags associated with the contact. Useful for organizing and filtering contacts by categories, departments, or custom classifications.       | [<br/>"premium",<br/>"beta-user",<br/>"enterprise"<br/>]                                                                                             |
| `metadata`                                                                                                                                           | Record<string, *any*>                                                                                                                                | :heavy_minus_sign:                                                                                                                                   | Additional custom metadata associated with the contact as key-value pairs. Use this to store any extra information specific to your application.     | {<br/>"department": "Engineering",<br/>"role": "Senior Developer",<br/>"subscription_tier": "premium",<br/>"last_login": "2024-01-15T10:30:00Z"<br/>} |