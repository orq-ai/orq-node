# InvokeDeploymentRequest2Messages4Ttl

The time-to-live for the cache control breakpoint. This may be one of the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`. Only supported by `Anthropic` Claude models.

## Example Usage

```typescript
import { InvokeDeploymentRequest2Messages4Ttl } from "@orq-ai/node/models/components";

let value: InvokeDeploymentRequest2Messages4Ttl = "5m";
```

## Values

```typescript
"5m" | "1h"
```