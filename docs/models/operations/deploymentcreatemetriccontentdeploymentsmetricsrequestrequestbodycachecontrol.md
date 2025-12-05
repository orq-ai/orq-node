# DeploymentCreateMetricContentDeploymentsMetricsRequestRequestBodyCacheControl

## Example Usage

```typescript
import { DeploymentCreateMetricContentDeploymentsMetricsRequestRequestBodyCacheControl } from "@orq-ai/node/models/operations";

let value:
  DeploymentCreateMetricContentDeploymentsMetricsRequestRequestBodyCacheControl =
    {
      type: "ephemeral",
    };
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                 | [operations.DeploymentCreateMetricContentDeploymentsMetricsRequestRequestBodyChoices22Type](../../models/operations/deploymentcreatemetriccontentdeploymentsmetricsrequestrequestbodychoices22type.md) | :heavy_check_mark:                                                                                                                                                                                     | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                           |
| `ttl`                                                                                                                                                                                                  | [operations.DeploymentCreateMetricContentDeploymentsMetricsRequestRequestBodyTtl](../../models/operations/deploymentcreatemetriccontentdeploymentsmetricsrequestrequestbodyttl.md)                     | :heavy_minus_sign:                                                                                                                                                                                     | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |