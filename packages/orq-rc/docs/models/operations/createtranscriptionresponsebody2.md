# CreateTranscriptionResponseBody2

## Example Usage

```typescript
import { CreateTranscriptionResponseBody2 } from "@orq-ai/node/models/operations";

let value: CreateTranscriptionResponseBody2 = {
  text: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `task`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `language`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `duration`                                                   | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `text`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `words`                                                      | [operations.Words](../../models/operations/words.md)[]       | :heavy_minus_sign:                                           | N/A                                                          |
| `segments`                                                   | [operations.Segments](../../models/operations/segments.md)[] | :heavy_minus_sign:                                           | N/A                                                          |