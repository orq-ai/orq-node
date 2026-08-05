# InvokeEvalRequestBody

## Example Usage

```typescript
import { InvokeEvalRequestBody } from "@orq-ai/node/models/operations";

let value: InvokeEvalRequestBody = {
  messages: [
    {
      role: "system",
      content: "<value>",
    },
  ],
  variables: {
    "locale": "en",
    "tags": [
      "alpha",
      "omega",
    ],
    "profile": {
      "tier": "gold",
      "active": true,
    },
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `query`                                                                                                                                    | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Latest user message                                                                                                                        |                                                                                                                                            |
| `output`                                                                                                                                   | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The generated response from the model                                                                                                      |                                                                                                                                            |
| `reference`                                                                                                                                | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The reference used to compare the output                                                                                                   |                                                                                                                                            |
| `retrievals`                                                                                                                               | *string*[]                                                                                                                                 | :heavy_minus_sign:                                                                                                                         | Knowledge base retrievals                                                                                                                  |                                                                                                                                            |
| `messages`                                                                                                                                 | [operations.Messages](../../models/operations/messages.md)[]                                                                               | :heavy_minus_sign:                                                                                                                         | The messages used to generate the output, without the last user message                                                                    |                                                                                                                                            |
| `model`                                                                                                                                    | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Model to use for LLM-based evaluators (e.g. "openai/gpt-4o")                                                                               |                                                                                                                                            |
| `variables`                                                                                                                                | Record<string, *components.EvaluatorVariableValue*>                                                                                        | :heavy_minus_sign:                                                                                                                         | Template variables for evaluator prompt substitution. Request values override evaluator defaults, including for nested arrays and objects. | {<br/>"locale": "en",<br/>"tags": [<br/>"alpha",<br/>"omega"<br/>],<br/>"profile": {<br/>"tier": "gold",<br/>"active": true<br/>}<br/>}    |