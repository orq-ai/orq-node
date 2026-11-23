# CompactResponse2ResponsesCacheControl

## Example Usage

```typescript
import { CompactResponse2ResponsesCacheControl } from "@orq-ai/node/models/operations";

let value: CompactResponse2ResponsesCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ttl`                                                                                                                                                                                       | [operations.CompactResponse2ResponsesRequestTtl](../../models/operations/compactresponse2responsesrequestttl.md)                                                                            | :heavy_minus_sign:                                                                                                                                                                          | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by Anthropic Claude models. |
| `type`                                                                                                                                                                                      | [operations.CompactResponse2ResponsesRequestType](../../models/operations/compactresponse2responsesrequesttype.md)                                                                          | :heavy_check_mark:                                                                                                                                                                          | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                |