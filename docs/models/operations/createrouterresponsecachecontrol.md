# CreateRouterResponseCacheControl

Top-level cache control automatically applies a cache_control marker to the last cacheable block in the request.

## Example Usage

```typescript
import { CreateRouterResponseCacheControl } from "@orq-ai/node/models/operations";

let value: CreateRouterResponseCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ttl`                                                                                                                                                                                       | [operations.CreateRouterResponseTtl](../../models/operations/createrouterresponsettl.md)                                                                                                    | :heavy_minus_sign:                                                                                                                                                                          | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by Anthropic Claude models. |
| `type`                                                                                                                                                                                      | [operations.CreateRouterResponseType](../../models/operations/createrouterresponsetype.md)                                                                                                  | :heavy_check_mark:                                                                                                                                                                          | Create a cache control breakpoint. Accepts only the value "ephemeral".                                                                                                                      |