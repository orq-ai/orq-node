# ResponseBodyOutput

## Example Usage

```typescript
import { ResponseBodyOutput } from "@orq-ai/node/models/operations";

let value: ResponseBodyOutput = {
  id: "<id>",
  choices: [],
  created: 7220.56,
  model: "V90",
  object: "chat.completion",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | A unique identifier for the chat completion.                                       |
| `choices`                                                                          | [operations.ResponseBodyChoices](../../models/operations/responsebodychoices.md)[] | :heavy_check_mark:                                                                 | A list of chat completion choices. Can be more than one if n is greater than 1.    |
| `created`                                                                          | *number*                                                                           | :heavy_check_mark:                                                                 | The Unix timestamp (in seconds) of when the chat completion was created.           |
| `model`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | The model used for the chat completion.                                            |
| `systemFingerprint`                                                                | *string*                                                                           | :heavy_minus_sign:                                                                 | This fingerprint represents the backend configuration that the model runs with.    |
| `usage`                                                                            | [operations.ResponseBodyUsage](../../models/operations/responsebodyusage.md)       | :heavy_minus_sign:                                                                 | Usage statistics for the completion request.                                       |
| `object`                                                                           | [operations.ResponseBodyObject](../../models/operations/responsebodyobject.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `outputMasking`                                                                    | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |