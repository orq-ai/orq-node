# GetAllPromptsPromptsCacheControl

Provider-level prompt caching configuration applied to the request. Creates a cache control breakpoint covering the request content. Only supported by `Anthropic` Claude models.

## Example Usage

```typescript
import { GetAllPromptsPromptsCacheControl } from "@orq-ai/node/models/operations";

let value: GetAllPromptsPromptsCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [operations.GetAllPromptsPromptsResponse200Type](../../models/operations/getallpromptspromptsresponse200type.md)                                                                              | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint. Accepts only the value "ephemeral".                                                                                                                        |
| `ttl`                                                                                                                                                                                         | [operations.GetAllPromptsPromptsTtl](../../models/operations/getallpromptspromptsttl.md)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |