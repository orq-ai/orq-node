# ThreeImage

An image content part.

## Example Usage

```typescript
import { ThreeImage } from "@orq-ai/node/models/operations";

let value: ThreeImage = {
  type: "input_image",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `cacheControl`                                                                                                       | [operations.CompactResponse3CacheControl](../../models/operations/compactresponse3cachecontrol.md)                   | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `detail`                                                                                                             | [operations.ThreeDetail](../../models/operations/threedetail.md)                                                     | :heavy_minus_sign:                                                                                                   | The detail level for image understanding.                                                                            |
| `fileId`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The ID of a previously uploaded file.                                                                                |
| `imageUrl`                                                                                                           | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The URL of the image.                                                                                                |
| `promptCacheBreakpoint`                                                                                              | [operations.CompactResponse3PromptCacheBreakpoint](../../models/operations/compactresponse3promptcachebreakpoint.md) | :heavy_minus_sign:                                                                                                   | An explicit OpenAI cache boundary for GPT-5.6 and later. Omitted ttl inherits prompt_cache_options.ttl.              |
| `type`                                                                                                               | *"input_image"*                                                                                                      | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |