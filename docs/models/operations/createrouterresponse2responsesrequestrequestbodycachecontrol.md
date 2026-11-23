# CreateRouterResponse2ResponsesRequestRequestBodyCacheControl

## Example Usage

```typescript
import { CreateRouterResponse2ResponsesRequestRequestBodyCacheControl } from "@orq-ai/node/models/operations";

let value: CreateRouterResponse2ResponsesRequestRequestBodyCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ttl`                                                                                                                                                                                       | [operations.CreateRouterResponse2ResponsesRequestRequestBodyInput2Ttl](../../models/operations/createrouterresponse2responsesrequestrequestbodyinput2ttl.md)                                | :heavy_minus_sign:                                                                                                                                                                          | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by Anthropic Claude models. |
| `type`                                                                                                                                                                                      | [operations.CreateRouterResponse2ResponsesRequestRequestBodyInput2Content5Type](../../models/operations/createrouterresponse2responsesrequestrequestbodyinput2content5type.md)              | :heavy_check_mark:                                                                                                                                                                          | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                |