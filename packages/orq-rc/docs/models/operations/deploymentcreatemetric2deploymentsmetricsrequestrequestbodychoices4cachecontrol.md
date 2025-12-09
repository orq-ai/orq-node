# DeploymentCreateMetric2DeploymentsMetricsRequestRequestBodyChoices4CacheControl

## Example Usage

```typescript
import { DeploymentCreateMetric2DeploymentsMetricsRequestRequestBodyChoices4CacheControl } from "@orq-ai/node/models/operations";

let value:
  DeploymentCreateMetric2DeploymentsMetricsRequestRequestBodyChoices4CacheControl =
    {
      type: "ephemeral",
    };
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                                 | [operations.DeploymentCreateMetric2DeploymentsMetricsRequestRequestBodyChoices4ContentType](../../models/operations/deploymentcreatemetric2deploymentsmetricsrequestrequestbodychoices4contenttype.md) | :heavy_check_mark:                                                                                                                                                                                     | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                           |
| `ttl`                                                                                                                                                                                                  | [operations.DeploymentCreateMetric2DeploymentsMetricsRequestRequestBodyChoices4Ttl](../../models/operations/deploymentcreatemetric2deploymentsmetricsrequestrequestbodychoices4ttl.md)                 | :heavy_minus_sign:                                                                                                                                                                                     | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |