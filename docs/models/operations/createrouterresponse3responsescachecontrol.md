# CreateRouterResponse3ResponsesCacheControl

## Example Usage

```typescript
import { CreateRouterResponse3ResponsesCacheControl } from "@orq-ai/node/models/operations";

let value: CreateRouterResponse3ResponsesCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ttl`                                                                                                                                                                                       | [operations.CreateRouterResponse3ResponsesRequestTtl](../../models/operations/createrouterresponse3responsesrequestttl.md)                                                                  | :heavy_minus_sign:                                                                                                                                                                          | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by Anthropic Claude models. |
| `type`                                                                                                                                                                                      | [operations.CreateRouterResponse3ResponsesRequestType](../../models/operations/createrouterresponse3responsesrequesttype.md)                                                                | :heavy_check_mark:                                                                                                                                                                          | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                |