# DeploymentGetConfig2DeploymentsRequestRequestBodyTtl

The time-to-live for the cache control breakpoint. This may be one of the following values:

- `5m`: 5 minutes
- `1h`: 1 hour

Defaults to `5m`. Only supported by `Anthropic` Claude models.

## Example Usage

```typescript
import { DeploymentGetConfig2DeploymentsRequestRequestBodyTtl } from "@orq-ai/node/models/operations";

let value: DeploymentGetConfig2DeploymentsRequestRequestBodyTtl = "1h";
```

## Values

```typescript
"5m" | "1h"
```