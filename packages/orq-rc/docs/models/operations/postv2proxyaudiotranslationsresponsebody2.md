# PostV2ProxyAudioTranslationsResponseBody2

## Example Usage

```typescript
import { PostV2ProxyAudioTranslationsResponseBody2 } from "@orq-ai/node/models/operations";

let value: PostV2ProxyAudioTranslationsResponseBody2 = {
  text: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `task`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `language`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `duration`                                                                           | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `text`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `words`                                                                              | [operations.ResponseBodyWords](../../models/operations/responsebodywords.md)[]       | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `segments`                                                                           | [operations.ResponseBodySegments](../../models/operations/responsebodysegments.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |