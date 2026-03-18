# ResponseBodyServiceTier

Specifies the latency tier to use for processing the request. Defaults to "auto".

## Example Usage

```typescript
import { ResponseBodyServiceTier } from "@orq-ai/node/models/operations";

let value: ResponseBodyServiceTier = "auto";
```

## Values

```typescript
"auto" | "default" | "flex" | "priority"
```