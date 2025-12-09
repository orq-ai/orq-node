# DeploymentCreateMetricContentDeploymentsMetricsRequestCacheControl

## Example Usage

```typescript
import { DeploymentCreateMetricContentDeploymentsMetricsRequestCacheControl } from "@orq-ai/node/models/operations";

let value: DeploymentCreateMetricContentDeploymentsMetricsRequestCacheControl =
  {
    type: "ephemeral",
  };
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                               | [operations.DeploymentCreateMetricContentDeploymentsMetricsRequestRequestBodyChoices1Type](../../models/operations/deploymentcreatemetriccontentdeploymentsmetricsrequestrequestbodychoices1type.md) | :heavy_check_mark:                                                                                                                                                                                   | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                         |
| `ttl`                                                                                                                                                                                                | [operations.DeploymentCreateMetricContentDeploymentsMetricsRequestTtl](../../models/operations/deploymentcreatemetriccontentdeploymentsmetricsrequestttl.md)                                         | :heavy_minus_sign:                                                                                                                                                                                   | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |