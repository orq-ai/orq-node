# APIError

## Example Usage

```typescript
import { APIError } from "@orq-ai/node/models/components";

let value: APIError = {
  code: null,
  message: "<value>",
  param: null,
  type: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `code`             | *string*           | :heavy_check_mark: | N/A                |
| `failures`         | *any*              | :heavy_minus_sign: | N/A                |
| `message`          | *string*           | :heavy_check_mark: | N/A                |
| `param`            | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *string*           | :heavy_check_mark: | N/A                |