# InvokeDeploymentRequest2PrefixMessagesCacheControl

## Example Usage

```typescript
import { InvokeDeploymentRequest2PrefixMessagesCacheControl } from "@orq-ai/node/models/components";

let value: InvokeDeploymentRequest2PrefixMessagesCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [components.InvokeDeploymentRequest2PrefixMessages4Type](../../models/components/invokedeploymentrequest2prefixmessages4type.md)                                                              | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                  |
| `ttl`                                                                                                                                                                                         | [components.InvokeDeploymentRequest2PrefixMessagesTtl](../../models/components/invokedeploymentrequest2prefixmessagesttl.md)                                                                  | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |