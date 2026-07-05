# GetPromptVersionPromptsCacheControl

Provider-level prompt caching configuration applied to the request. Creates a cache control breakpoint covering the request content. Only supported by `Anthropic` Claude models.

## Example Usage

```typescript
import { GetPromptVersionPromptsCacheControl } from "@orq-ai/node/models/operations";

let value: GetPromptVersionPromptsCacheControl = {
  type: "ephemeral",
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                        | [operations.GetPromptVersionPromptsResponseType](../../models/operations/getpromptversionpromptsresponsetype.md)                                                                              | :heavy_check_mark:                                                                                                                                                                            | Create a cache control breakpoint. Accepts only the value "ephemeral".                                                                                                                        |
| `ttl`                                                                                                                                                                                         | [operations.GetPromptVersionPromptsTtl](../../models/operations/getpromptversionpromptsttl.md)                                                                                                | :heavy_minus_sign:                                                                                                                                                                            | The time-to-live for the cache control breakpoint. This may be one of the following values:<br/><br/>- `5m`: 5 minutes<br/>- `1h`: 1 hour<br/><br/>Defaults to `5m`. Only supported by `Anthropic` Claude models. |