# DeploymentGetConfig2DeploymentsRequestRequestBodyMessagesCacheControl

## Example Usage

```typescript
import { DeploymentGetConfig2DeploymentsRequestRequestBodyMessagesCacheControl } from "@orq-ai/node/models/operations";

let value:
  DeploymentGetConfig2DeploymentsRequestRequestBodyMessagesCacheControl = {
    type: "ephemeral",
  };
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [operations.DeploymentGetConfig2DeploymentsRequestRequestBodyMessages3Content4Type](../../models/operations/deploymentgetconfig2deploymentsrequestrequestbodymessages3content4type.md)        | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                  |
| `ttl`                                                                                                                                                                                         | [operations.DeploymentGetConfig2DeploymentsRequestRequestBodyMessagesTtl](../../models/operations/deploymentgetconfig2deploymentsrequestrequestbodymessagesttl.md)                            | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |