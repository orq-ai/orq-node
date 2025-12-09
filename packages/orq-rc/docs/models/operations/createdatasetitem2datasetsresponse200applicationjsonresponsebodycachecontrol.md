# CreateDatasetItem2DatasetsResponse200ApplicationJSONResponseBodyCacheControl

## Example Usage

```typescript
import { CreateDatasetItem2DatasetsResponse200ApplicationJSONResponseBodyCacheControl } from "@orq-ai/node/models/operations";

let value:
  CreateDatasetItem2DatasetsResponse200ApplicationJSONResponseBodyCacheControl =
    {
      type: "ephemeral",
    };
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                               | [operations.CreateDatasetItem2DatasetsResponse200ApplicationJSONResponseBodyMessages5Type](../../models/operations/createdatasetitem2datasetsresponse200applicationjsonresponsebodymessages5type.md) | :heavy_check_mark:                                                                                                                                                                                   | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                         |
| `ttl`                                                                                                                                                                                                | [operations.CreateDatasetItem2DatasetsResponse200ApplicationJSONResponseBodyTtl](../../models/operations/createdatasetitem2datasetsresponse200applicationjsonresponsebodyttl.md)                     | :heavy_minus_sign:                                                                                                                                                                                   | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |