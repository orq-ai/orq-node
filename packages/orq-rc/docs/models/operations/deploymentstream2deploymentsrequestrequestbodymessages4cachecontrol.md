# DeploymentStream2DeploymentsRequestRequestBodyMessages4CacheControl

## Example Usage

```typescript
import { DeploymentStream2DeploymentsRequestRequestBodyMessages4CacheControl } from "@orq-ai/node/models/operations";

let value: DeploymentStream2DeploymentsRequestRequestBodyMessages4CacheControl =
  {
    type: "ephemeral",
  };
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [operations.DeploymentStream2DeploymentsRequestRequestBodyMessages4ContentType](../../models/operations/deploymentstream2deploymentsrequestrequestbodymessages4contenttype.md)                | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                  |
| `ttl`                                                                                                                                                                                         | [operations.DeploymentStream2DeploymentsRequestRequestBodyMessages4Ttl](../../models/operations/deploymentstream2deploymentsrequestrequestbodymessages4ttl.md)                                | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |