# PermissionMode

Permission preset; restricted keys hold only the domains granted in access.

## Example Usage

```typescript
import { PermissionMode } from "@orq-ai/node/models/operations";

let value: PermissionMode = "PERMISSION_MODE_ALL";
```

## Values

```typescript
"all" | "restricted" | "read_only" | "PERMISSION_MODE_ALL" | "PERMISSION_MODE_RESTRICTED" | "PERMISSION_MODE_READ_ONLY"
```