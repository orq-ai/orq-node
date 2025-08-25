# PostV2ProxyModerationsRequestBody

Classifies if text violates content policy

## Example Usage

```typescript
import { PostV2ProxyModerationsRequestBody } from "@orq-ai/node/models/operations";

let value: PostV2ProxyModerationsRequestBody = {
  input: "<value>",
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `input`                                                                                                                                       | *operations.Input*                                                                                                                            | :heavy_check_mark:                                                                                                                            | Input (or inputs) to classify. Can be a single string, an array of strings, or an array of multi-modal input objects similar to other models. |
| `model`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The content moderation model you would like to use. Defaults to omni-moderation-latest                                                        |