# Choices

## Example Usage

```typescript
import { Choices } from "@orq-ai/node/models/operations";

let value: Choices = {
  index: 3926.76,
  message: {
    type: "image",
    role: "assistant",
    url: "https://neat-import.org",
  },
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `index`              | *number*             | :heavy_check_mark:   | N/A                  |
| `message`            | *operations.Message* | :heavy_check_mark:   | N/A                  |
| `finishReason`       | *string*             | :heavy_minus_sign:   | N/A                  |