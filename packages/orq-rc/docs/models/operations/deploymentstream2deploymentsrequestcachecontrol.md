# DeploymentStream2DeploymentsRequestCacheControl

## Example Usage

```typescript
import { DeploymentStream2DeploymentsRequestCacheControl } from "@orq-ai/node/models/operations";

let value: DeploymentStream2DeploymentsRequestCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [operations.DeploymentStream2DeploymentsRequestRequestBodyPrefixMessages4Type](../../models/operations/deploymentstream2deploymentsrequestrequestbodyprefixmessages4type.md)                  | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                  |
| `ttl`                                                                                                                                                                                         | [operations.DeploymentStream2DeploymentsRequestTtl](../../models/operations/deploymentstream2deploymentsrequestttl.md)                                                                        | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |