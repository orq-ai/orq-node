# ResendInvitationResponse

## Example Usage

```typescript
import { ResendInvitationResponse } from "@orq-ai/node/models/components";

let value: ResendInvitationResponse = {
  person: {
    id: "<id>",
    accountId: "<id>",
    email: "Lonny_Torp68@hotmail.com",
    displayName: "Robin_Stoltenberg",
    roles: [
      "<value 1>",
      "<value 2>",
    ],
    groups: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    status: "PERSON_STATUS_ACTIVE",
    createdAt: new Date("2025-10-23T22:48:12.555Z"),
    updatedAt: new Date("2026-06-03T10:13:29.362Z"),
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `person`                                               | [components.Person](../../models/components/person.md) | :heavy_check_mark:                                     | Person whose invitation was resent.                    |