# TwoImage

An image content part.

## Example Usage

```typescript
import { TwoImage } from "@orq-ai/node/models/operations";

let value: TwoImage = {
  type: "input_image",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `cacheControl`                                                                                                                 | [operations.CreateRouterResponse2ResponsesCacheControl](../../models/operations/createrouterresponse2responsescachecontrol.md) | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `detail`                                                                                                                       | [operations.Detail](../../models/operations/detail.md)                                                                         | :heavy_minus_sign:                                                                                                             | The detail level for image understanding.                                                                                      |
| `fileId`                                                                                                                       | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The ID of a previously uploaded file.                                                                                          |
| `imageUrl`                                                                                                                     | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The URL of the image.                                                                                                          |
| `promptCacheBreakpoint`                                                                                                        | [operations.TwoPromptCacheBreakpoint](../../models/operations/twopromptcachebreakpoint.md)                                     | :heavy_minus_sign:                                                                                                             | An explicit OpenAI cache boundary for GPT-5.6 and later. Omitted ttl inherits prompt_cache_options.ttl.                        |
| `type`                                                                                                                         | *"input_image"*                                                                                                                | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |