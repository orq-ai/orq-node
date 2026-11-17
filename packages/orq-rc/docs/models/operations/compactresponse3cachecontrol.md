# CompactResponse3CacheControl

## Example Usage

```typescript
import { CompactResponse3CacheControl } from "@orq-ai/node/models/operations";

let value: CompactResponse3CacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                       | Type                                                                                                                                                                                        | Required                                                                                                                                                                                    | Description                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ttl`                                                                                                                                                                                       | [operations.CompactResponse3ResponsesTtl](../../models/operations/compactresponse3responsesttl.md)                                                                                          | :heavy_minus_sign:                                                                                                                                                                          | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by Anthropic Claude models. |
| `type`                                                                                                                                                                                      | [operations.CompactResponse3ResponsesType](../../models/operations/compactresponse3responsestype.md)                                                                                        | :heavy_check_mark:                                                                                                                                                                          | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                |