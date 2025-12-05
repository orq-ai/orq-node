# ListDatasetDatapointsContentDatasetsCacheControl

## Example Usage

```typescript
import { ListDatasetDatapointsContentDatasetsCacheControl } from "@orq-ai/node/models/operations";

let value: ListDatasetDatapointsContentDatasetsCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [operations.ListDatasetDatapointsContentDatasetsResponse200Type](../../models/operations/listdatasetdatapointscontentdatasetsresponse200type.md)                                              | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                  |
| `ttl`                                                                                                                                                                                         | [operations.ListDatasetDatapointsContentDatasetsTtl](../../models/operations/listdatasetdatapointscontentdatasetsttl.md)                                                                      | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |