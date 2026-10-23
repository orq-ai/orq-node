# CreateModerationRequestBody

Classifies if text violates content policy

## Example Usage

```typescript
import { CreateModerationRequestBody } from "@orq-ai/node/models/operations";

let value: CreateModerationRequestBody = {
  input: "<value>",
  model: "openai/omni-moderation-latest",
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `input`                                                                                                                                       | *operations.Input*                                                                                                                            | :heavy_check_mark:                                                                                                                            | Input (or inputs) to classify. Can be a single string, an array of strings, or an array of multi-modal input objects similar to other models. |                                                                                                                                               |
| `model`                                                                                                                                       | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | The content moderation model you would like to use. Defaults to omni-moderation-latest                                                        | openai/omni-moderation-latest                                                                                                                 |