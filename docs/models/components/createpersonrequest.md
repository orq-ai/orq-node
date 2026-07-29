# CreatePersonRequest

## Example Usage

```typescript
import { CreatePersonRequest } from "@orq-ai/node/models/components";

let value: CreatePersonRequest = {
  emails: [],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `emails`                                                   | *string*[]                                                 | :heavy_check_mark:                                         | Email addresses to invite. At least one email is required. |
| `roles`                                                    | *string*[]                                                 | :heavy_minus_sign:                                         | Roles to assign. Defaults to ["member"] when empty.        |
| `groups`                                                   | *string*[]                                                 | :heavy_minus_sign:                                         | Group IDs to assign.                                       |