# CreateImageResponseBody

Represents an image generation response from the API.

## Example Usage

```typescript
import { CreateImageResponseBody } from "@orq-ai/node/models/operations";

let value: CreateImageResponseBody = {
  created: 656.03,
  data: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `created`                                                                  | *number*                                                                   | :heavy_check_mark:                                                         | The Unix timestamp (in seconds) of when the image was created.             |
| `data`                                                                     | [operations.CreateImageData](../../models/operations/createimagedata.md)[] | :heavy_check_mark:                                                         | Represents the url or the content of an image generated.                   |
| `usage`                                                                    | [operations.CreateImageUsage](../../models/operations/createimageusage.md) | :heavy_minus_sign:                                                         | N/A                                                                        |