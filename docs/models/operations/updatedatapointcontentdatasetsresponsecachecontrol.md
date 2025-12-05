# UpdateDatapointContentDatasetsResponseCacheControl

## Example Usage

```typescript
import { UpdateDatapointContentDatasetsResponseCacheControl } from "@orq-ai/node/models/operations";

let value: UpdateDatapointContentDatasetsResponseCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [operations.UpdateDatapointContentDatasetsResponse200ApplicationJSONType](../../models/operations/updatedatapointcontentdatasetsresponse200applicationjsontype.md)                            | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                  |
| `ttl`                                                                                                                                                                                         | [operations.UpdateDatapointContentDatasetsResponseTtl](../../models/operations/updatedatapointcontentdatasetsresponsettl.md)                                                                  | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |