# BulkCreateDatapoints2ImageUrl

## Example Usage

```typescript
import { BulkCreateDatapoints2ImageUrl } from "@orq-ai/node/models/operations";

let value: BulkCreateDatapoints2ImageUrl = {
  url: "https://chilly-opera.name",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | Either a URL of the image or the base64 encoded data URI.                            |
| `detail`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Specifies the detail level of the image. Currently only supported with OpenAI models |