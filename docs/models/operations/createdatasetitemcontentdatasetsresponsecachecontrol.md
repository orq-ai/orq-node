# CreateDatasetItemContentDatasetsResponseCacheControl

## Example Usage

```typescript
import { CreateDatasetItemContentDatasetsResponseCacheControl } from "@orq-ai/node/models/operations";

let value: CreateDatasetItemContentDatasetsResponseCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [operations.CreateDatasetItemContentDatasetsResponse200ApplicationJSONType](../../models/operations/createdatasetitemcontentdatasetsresponse200applicationjsontype.md)                        | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                  |
| `ttl`                                                                                                                                                                                         | [operations.CreateDatasetItemContentDatasetsResponseTtl](../../models/operations/createdatasetitemcontentdatasetsresponsettl.md)                                                              | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |