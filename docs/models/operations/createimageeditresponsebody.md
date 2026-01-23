# CreateImageEditResponseBody

Represents an image edit response from the API.

## Example Usage

```typescript
import { CreateImageEditResponseBody } from "@orq-ai/node/models/operations";

let value: CreateImageEditResponseBody = {
  created: 7761.74,
  data: [
    {},
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `created`                                                                          | *number*                                                                           | :heavy_check_mark:                                                                 | The Unix timestamp (in seconds) of when the image was created.                     |
| `outputFormat`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | The output format of the image generation                                          |
| `size`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | The size of the image generated                                                    |
| `quality`                                                                          | *string*                                                                           | :heavy_minus_sign:                                                                 | The quality of the image generated                                                 |
| `data`                                                                             | [operations.CreateImageEditData](../../models/operations/createimageeditdata.md)[] | :heavy_check_mark:                                                                 | The list of generated images.                                                      |
| `usage`                                                                            | [operations.CreateImageEditUsage](../../models/operations/createimageeditusage.md) | :heavy_minus_sign:                                                                 | The token usage information for the image generation.                              |