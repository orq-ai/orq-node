# User

User is the canonical workspace-user record.

## Example Usage

```typescript
import { User } from "@orq-ai/node/models/components";

let value: User = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Workspace-user identifier.                                                                    |
| `accountId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Account identifier.                                                                           |
| `email`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Account email.                                                                                |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | Account display name.                                                                         |
| `logoUrl`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Avatar URL.                                                                                   |
| `teamIds`                                                                                     | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Team identifiers. The support-only team is excluded.                                          |
| `roles`                                                                                       | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Effective workspace roles.                                                                    |
| `lastActivity`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Last activity timestamp. Absent when never active.                                            |
| `invitationData`                                                                              | [components.UserInvitationData](../../models/components/userinvitationdata.md)                | :heavy_minus_sign:                                                                            | Outstanding invitation metadata. Absent for active accounts.                                  |