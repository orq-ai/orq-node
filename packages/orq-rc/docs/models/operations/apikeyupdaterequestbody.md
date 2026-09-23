# ApiKeyUpdateRequestBody

## Example Usage

```typescript
import { ApiKeyUpdateRequestBody } from "@orq-ai/node/models/operations";

let value: ApiKeyUpdateRequestBody = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `access`                                                                                       | Record<string, *string*>                                                                       | :heavy_minus_sign:                                                                             | Per-domain access level (none, read or write) for restricted keys.                             |
| `active`                                                                                       | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | Legacy toggle mirrored onto status: false disables, true re-enables.                           |
| `constraints`                                                                                  | [components.Constraints](../../models/components/constraints.md)                               | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | New display name.                                                                              |
| `permissionMode`                                                                               | [operations.ApiKeyUpdatePermissionMode](../../models/operations/apikeyupdatepermissionmode.md) | :heavy_minus_sign:                                                                             | Permission preset; a restricted key must keep at least one granted domain.                     |
| `projectScope`                                                                                 | [components.ProjectScope](../../models/components/projectscope.md)                             | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `status`                                                                                       | [operations.Status](../../models/operations/status.md)                                         | :heavy_minus_sign:                                                                             | Lifecycle status; revoked is terminal.                                                         |