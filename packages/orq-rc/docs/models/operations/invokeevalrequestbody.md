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
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `query`                                                                 | *string*                                                                | :heavy_minus_sign:                                                      | Latest user message                                                     |
| `output`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | The generated response from the model                                   |
| `reference`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | The reference used to compare the output                                |
| `retrievals`                                                            | *string*[]                                                              | :heavy_minus_sign:                                                      | Knowledge base retrievals                                               |
| `messages`                                                              | [operations.Messages](../../models/operations/messages.md)[]            | :heavy_minus_sign:                                                      | The messages used to generate the output, without the last user message |