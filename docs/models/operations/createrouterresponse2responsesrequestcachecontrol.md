# CreateRouterResponse2ResponsesRequestCacheControl

## Example Usage

```typescript
import { CreateRouterResponse2ResponsesRequestCacheControl } from "@orq-ai/node/models/operations";

let value: CreateRouterResponse2ResponsesRequestCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ttl`                                                                                                                                                                                       | [operations.CreateRouterResponse2ResponsesRequestRequestBodyTtl](../../models/operations/createrouterresponse2responsesrequestrequestbodyttl.md)                                            | :heavy_minus_sign:                                                                                                                                                                          | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by Anthropic Claude models. |
| `type`                                                                                                                                                                                      | [operations.CreateRouterResponse2ResponsesRequestRequestBodyInput2Type](../../models/operations/createrouterresponse2responsesrequestrequestbodyinput2type.md)                              | :heavy_check_mark:                                                                                                                                                                          | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                |