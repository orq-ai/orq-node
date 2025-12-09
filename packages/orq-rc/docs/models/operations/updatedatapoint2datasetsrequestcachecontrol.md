# UpdateDatapoint2DatasetsRequestCacheControl

## Example Usage

```typescript
import { UpdateDatapoint2DatasetsRequestCacheControl } from "@orq-ai/node/models/operations";

let value: UpdateDatapoint2DatasetsRequestCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [operations.UpdateDatapoint2DatasetsRequestRequestBodyMessages4Type](../../models/operations/updatedatapoint2datasetsrequestrequestbodymessages4type.md)                                      | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                  |
| `ttl`                                                                                                                                                                                         | [operations.UpdateDatapoint2DatasetsRequestTtl](../../models/operations/updatedatapoint2datasetsrequestttl.md)                                                                                | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |