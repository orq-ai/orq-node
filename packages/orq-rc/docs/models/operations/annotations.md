# Annotations

## Example Usage

```typescript
import { Annotations } from "@orq-ai/node/models/operations";

let value: Annotations = {
  key: "<key>",
  value: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                                                                                                                                           | Type                                                                                                                                                                                                            | Required                                                                                                                                                                                                        | Description                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                                                                                                           | *string*                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                              | Unique key of the review.                                                                                                                                                                                       |
| `value`                                                                                                                                                                                                         | *operations.CreateAnnotationValue*                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                              | The feedback value. For single-select, provide a string or single-element array. For multi-select, provide an array of strings. For range evaluations, provide a number. For text/correction, provide a string. |