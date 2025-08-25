# CreateChatCompletionFunction

## Example Usage

```typescript
import { CreateChatCompletionFunction } from "@orq-ai/node/models/operations";

let value: CreateChatCompletionFunction = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                  | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The name of the function to call.                                                                       |
| `description`                                                                                           | *string*                                                                                                | :heavy_minus_sign:                                                                                      | A description of what the function does, used by the model to choose when and how to call the function. |
| `parameters`                                                                                            | [operations.ParametersT](../../models/operations/parameterst.md)                                        | :heavy_minus_sign:                                                                                      | The parameters the functions accepts, described as a JSON Schema object                                 |
| `strict`                                                                                                | *boolean*                                                                                               | :heavy_minus_sign:                                                                                      | Whether to enable strict schema adherence when generating the function call.                            |