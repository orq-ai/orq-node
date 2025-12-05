# DeploymentGetConfig2DeploymentsRequestRequestBodyMessages5CacheControl

## Example Usage

```typescript
import { DeploymentGetConfig2DeploymentsRequestRequestBodyMessages5CacheControl } from "@orq-ai/node/models/operations";

let value:
  DeploymentGetConfig2DeploymentsRequestRequestBodyMessages5CacheControl = {
    type: "ephemeral",
  };
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [operations.DeploymentGetConfig2DeploymentsRequestRequestBodyMessages5ContentType](../../models/operations/deploymentgetconfig2deploymentsrequestrequestbodymessages5contenttype.md)          | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                  |
| `ttl`                                                                                                                                                                                         | [operations.DeploymentGetConfig2DeploymentsRequestRequestBodyMessages5Ttl](../../models/operations/deploymentgetconfig2deploymentsrequestrequestbodymessages5ttl.md)                          | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |