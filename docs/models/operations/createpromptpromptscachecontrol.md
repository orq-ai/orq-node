# CreatePromptPromptsCacheControl

Provider-level prompt caching configuration applied to the request. Creates a cache control breakpoint covering the request content. Only supported by `Anthropic` Claude models.

## Example Usage

```typescript
import { CreatePromptPromptsCacheControl } from "@orq-ai/node/models/operations";

let value: CreatePromptPromptsCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [operations.CreatePromptPromptsResponse200ApplicationJSONType](../../models/operations/createpromptpromptsresponse200applicationjsontype.md)                                                  | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint at this content block. Accepts only the value "ephemeral".                                                                                                  |
| `ttl`                                                                                                                                                                                         | [operations.CreatePromptPromptsTtl](../../models/operations/createpromptpromptsttl.md)                                                                                                        | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |