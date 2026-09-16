# Choices

## Example Usage

```typescript
import { Choices } from "@orq-ai/node/models/operations";

let value: Choices = {
  index: 5149.39,
  message: {
    type: "image",
    role: "system",
    url: "https://amazing-sweatshop.net/",
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `index`              | *number*             | :heavy_check_mark:   | N/A                  |
| `message`            | *operations.Message* | :heavy_check_mark:   | N/A                  |
| `finishReason`       | *string*             | :heavy_minus_sign:   | N/A                  |