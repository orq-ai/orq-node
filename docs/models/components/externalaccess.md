# ExternalAccess

Whether external MCP clients may reach this file system. Defaults to disabled.

## Example Usage

```typescript
import { ExternalAccess } from "@orq-ai/node/models/components";

let value: ExternalAccess = "disabled";
```

## Values

```typescript
"disabled" | "read_only" | "read_write"
```