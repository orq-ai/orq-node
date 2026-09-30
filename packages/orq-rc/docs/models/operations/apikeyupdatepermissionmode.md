# ApiKeyUpdatePermissionMode

Permission preset; a restricted key must keep at least one granted domain.

## Example Usage

```typescript
import { ApiKeyUpdatePermissionMode } from "@orq-ai/node/models/operations";

let value: ApiKeyUpdatePermissionMode = "PERMISSION_MODE_RESTRICTED";
```

## Values

```typescript
"all" | "restricted" | "read_only" | "PERMISSION_MODE_ALL" | "PERMISSION_MODE_RESTRICTED" | "PERMISSION_MODE_READ_ONLY"
```