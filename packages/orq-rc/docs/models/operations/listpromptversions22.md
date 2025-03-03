# ListPromptVersions22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { ListPromptVersions22 } from "@orq-ai/node/models/operations";

let value: ListPromptVersions22 = {
  type: "image_url",
  imageUrl: {
    url: "https://usable-programme.biz",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [operations.ListPromptVersions2PromptsType](../../models/operations/listpromptversions2promptstype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `imageUrl`                                                                                             | [operations.ListPromptVersions2ImageUrl](../../models/operations/listpromptversions2imageurl.md)       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |