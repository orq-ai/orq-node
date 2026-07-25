# Person

## Example Usage

```typescript
import { Person } from "@orq-ai/node/models/components";

let value: Person = {
  id: "<id>",
  accountId: "<id>",
  email: "Macey32@gmail.com",
  displayName: "Marvin_Rempel56",
  roles: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  groups: [
    "<value 1>",
  ],
  status: "PERSON_STATUS_PENDING",
  createdAt: new Date("2024-11-13T18:56:04.213Z"),
  updatedAt: new Date("2024-12-29T15:33:01.055Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique workspace user identifier (ULID).                                                      |
| `accountId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | Linked account ID.                                                                            |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Email address.                                                                                |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Full display name (firstname + lastname).                                                     |
| `avatarUrl`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Profile image URL.                                                                            |
| `roles`                                                                                       | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Permission roles assigned to the person.                                                      |
| `groups`                                                                                      | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Group IDs the person belongs to (non-support groups).                                         |
| `status`                                                                                      | [components.PersonStatus](../../models/components/personstatus.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastActivity`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Last activity timestamp.                                                                      |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the person was invited or added.                                                         |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp.                                                                  |