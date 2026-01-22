# CreateImageVariationResponseBody

Represents an image variation response from the API.

## Example Usage

```typescript
import { CreateImageVariationResponseBody } from "@orq-ai/node/models/operations";

let value: CreateImageVariationResponseBody = {
  created: 6669.69,
  data: [
    {},
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `created`                                                                                    | *number*                                                                                     | :heavy_check_mark:                                                                           | The Unix timestamp (in seconds) of when the image was created.                               |
| `outputFormat`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | The output format of the image generation                                                    |
| `size`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | The size of the image generated                                                              |
| `quality`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | The quality of the image generated                                                           |
| `data`                                                                                       | [operations.CreateImageVariationData](../../models/operations/createimagevariationdata.md)[] | :heavy_check_mark:                                                                           | The list of generated images.                                                                |
| `usage`                                                                                      | [operations.CreateImageVariationUsage](../../models/operations/createimagevariationusage.md) | :heavy_minus_sign:                                                                           | The token usage information for the image generation.                                        |