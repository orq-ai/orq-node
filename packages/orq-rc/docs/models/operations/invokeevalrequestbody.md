# InvokeEvalRequestBody

## Example Usage

```typescript
import { InvokeEvalRequestBody } from "@orq-ai/node/models/operations";

let value: InvokeEvalRequestBody = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `input`                                                                          | *string*                                                                         | :heavy_minus_sign:                                                               | Latest user message                                                              |
| `output`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | The generated response from the model                                            |
| `reference`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | The reference used to compare the output                                         |
| `retrievals`                                                                     | *string*[]                                                                       | :heavy_minus_sign:                                                               | Knowledge base retrievals                                                        |
| `messages`                                                                       | [operations.InvokeEvalMessages](../../models/operations/invokeevalmessages.md)[] | :heavy_minus_sign:                                                               | The messages used to generate the output, without the last user message          |