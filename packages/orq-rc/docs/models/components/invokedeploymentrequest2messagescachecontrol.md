# InvokeDeploymentRequest2MessagesCacheControl

## Example Usage

```typescript
import { InvokeDeploymentRequest2MessagesCacheControl } from "@orq-ai/node/models/components";

let value: InvokeDeploymentRequest2MessagesCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [components.InvokeDeploymentRequest2Messages3ContentType](../../models/components/invokedeploymentrequest2messages3contenttype.md)                                                            | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                  |
| `ttl`                                                                                                                                                                                         | [components.InvokeDeploymentRequest2MessagesTtl](../../models/components/invokedeploymentrequest2messagesttl.md)                                                                              | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |