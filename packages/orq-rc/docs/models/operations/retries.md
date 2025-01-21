# Retries

## Example Usage

```typescript
import { Retries } from "@orq-ai/node/models/operations";

let value: Retries = {
  retryAttempt: 5206.73,
  status: 2601.79,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `retryAttempt`     | *number*           | :heavy_check_mark: | N/A                |
| `status`           | *number*           | :heavy_check_mark: | N/A                |
| `message`          | *string*           | :heavy_minus_sign: | N/A                |
| `isFallback`       | *boolean*          | :heavy_minus_sign: | N/A                |