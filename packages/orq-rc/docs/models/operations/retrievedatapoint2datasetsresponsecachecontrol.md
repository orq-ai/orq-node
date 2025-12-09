# RetrieveDatapoint2DatasetsResponseCacheControl

## Example Usage

```typescript
import { RetrieveDatapoint2DatasetsResponseCacheControl } from "@orq-ai/node/models/operations";

let value: RetrieveDatapoint2DatasetsResponseCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [operations.RetrieveDatapoint2DatasetsResponse200ApplicationJSONResponseBodyType](../../models/operations/retrievedatapoint2datasetsresponse200applicationjsonresponsebodytype.md)            | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                  |
| `ttl`                                                                                                                                                                                         | [operations.RetrieveDatapoint2DatasetsResponseTtl](../../models/operations/retrievedatapoint2datasetsresponsettl.md)                                                                          | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |