# ListPromptVersions22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { ListPromptVersions22 } from "@orq-ai/node/models/operations";

let value: ListPromptVersions22 = {
  type: "image_url",
  imageUrl: {
    url: "https://picsum.photos/id/1/200/300",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `type`                                                                                           | *"image_url"*                                                                                    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `imageUrl`                                                                                       | [operations.ListPromptVersions2ImageUrl](../../models/operations/listpromptversions2imageurl.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |