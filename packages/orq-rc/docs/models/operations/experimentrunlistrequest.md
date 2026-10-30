# ExperimentRunListRequest

## Example Usage

```typescript
import { ExperimentRunListRequest } from "@orq-ai/node/models/operations";

let value: ExperimentRunListRequest = {
  experimentId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `experimentId`     | *string*           | :heavy_check_mark: | N/A                |
| `limit`            | *number*           | :heavy_minus_sign: | N/A                |
| `startingAfter`    | *string*           | :heavy_minus_sign: | N/A                |
| `endingBefore`     | *string*           | :heavy_minus_sign: | N/A                |
| `includeMetrics`   | *boolean*          | :heavy_minus_sign: | N/A                |