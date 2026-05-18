# Grain

Requested bucket grain. Use `auto` or omit the field to let the server choose based on the requested range.

## Example Usage

```typescript
import { Grain } from "@orq-ai/node/models/components";

let value: Grain = "minute";
```

## Values

```typescript
"auto" | "minute" | "hour" | "day"
```