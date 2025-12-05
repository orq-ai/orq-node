# DeploymentStream2DeploymentsRequestRequestBodyMessagesCacheControl

## Example Usage

```typescript
import { DeploymentStream2DeploymentsRequestRequestBodyMessagesCacheControl } from "@orq-ai/node/models/operations";

let value: DeploymentStream2DeploymentsRequestRequestBodyMessagesCacheControl =
  {
    type: "ephemeral",
  };
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [operations.DeploymentStream2DeploymentsRequestRequestBodyMessages3Type](../../models/operations/deploymentstream2deploymentsrequestrequestbodymessages3type.md)                              | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                  |
| `ttl`                                                                                                                                                                                         | [operations.DeploymentStream2DeploymentsRequestRequestBodyMessagesTtl](../../models/operations/deploymentstream2deploymentsrequestrequestbodymessagesttl.md)                                  | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |