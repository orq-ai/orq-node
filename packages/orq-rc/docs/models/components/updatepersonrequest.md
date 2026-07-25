# UpdatePersonRequest

## Example Usage

```typescript
import { UpdatePersonRequest } from "@orq-ai/node/models/components";

let value: UpdatePersonRequest = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `roles`                                                                      | *string*[]                                                                   | :heavy_minus_sign:                                                           | Replacement role list. Leave empty to clear all roles.                       |
| `groups`                                                                     | *string*[]                                                                   | :heavy_minus_sign:                                                           | Replacement group list. Leave empty to clear all groups.                     |
| `clearRoles`                                                                 | *boolean*                                                                    | :heavy_minus_sign:                                                           | Explicitly clear all roles. Set to true when sending an empty roles array.   |
| `clearGroups`                                                                | *boolean*                                                                    | :heavy_minus_sign:                                                           | Explicitly clear all groups. Set to true when sending an empty groups array. |