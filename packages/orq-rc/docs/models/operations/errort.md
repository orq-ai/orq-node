# ErrorT

The error that occurred, if any

## Example Usage

```typescript
import { ErrorT } from "@orq-ai/node/models/operations";

let value: ErrorT = {
  code: "<value>",
  message: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `code`             | *string*           | :heavy_check_mark: | The error code     |
| `message`          | *string*           | :heavy_check_mark: | The error message  |