# CreateChatCompletionParameters

The parameters the functions accepts, described as a JSON Schema object

## Example Usage

```typescript
import { CreateChatCompletionParameters } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionParameters = {
  type: "object",
  properties: {},
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [operations.CreateChatCompletionRouterChatCompletionsType](../../models/operations/createchatcompletionrouterchatcompletionstype.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `properties`                                                                                                                         | Record<string, *any*>                                                                                                                | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `required`                                                                                                                           | *string*[]                                                                                                                           | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |
| `additionalProperties`                                                                                                               | *boolean*                                                                                                                            | :heavy_minus_sign:                                                                                                                   | N/A                                                                                                                                  |