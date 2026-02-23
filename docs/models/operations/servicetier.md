# ServiceTier

Specifies the latency tier to use for processing the request. Defaults to "auto".

## Example Usage

```typescript
import { ServiceTier } from "@orq-ai/node/models/operations";

let value: ServiceTier = "auto";
```

## Values

```typescript
"auto" | "default" | "flex" | "priority"
```