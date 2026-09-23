# Domain

## Example Usage

```typescript
import { Domain } from "@orq-ai/node/models/components";

let value: Domain = {
  allowedScopes: [
    "<value 1>",
  ],
  displayName: "Jaden_Hilpert",
  extraWriteVerbs: [
    "<value 1>",
  ],
  group: "DOMAIN_GROUP_WORKSPACE_ADMIN",
  id: "<id>",
  readable: true,
  writable: false,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `allowedScopes`                                                                                     | *string*[]                                                                                          | :heavy_check_mark:                                                                                  | Project scopes this domain may be granted under.                                                    |
| `displayName`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | Human-readable label.                                                                               |
| `extraWriteVerbs`                                                                                   | *string*[]                                                                                          | :heavy_check_mark:                                                                                  | Additional verbs granted only with write access.                                                    |
| `group`                                                                                             | [components.Group](../../models/components/group.md)                                                | :heavy_check_mark:                                                                                  | Logical group the entry belongs to.                                                                 |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | Stable domain identifier, used as the key in access and as the verb prefix in resolved permissions. |
| `readable`                                                                                          | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | Whether the domain can be granted read access.                                                      |
| `writable`                                                                                          | *boolean*                                                                                           | :heavy_check_mark:                                                                                  | Whether the domain can be granted write access.                                                     |