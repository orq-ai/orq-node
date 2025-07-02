# QueryParamFilterBy

Filter contacts by tags. Can be provided as JSON object {"tags": ["premium", "beta-user"]} or as query format "tags=premium,beta-user"

## Example Usage

```typescript
import { QueryParamFilterBy } from "@orq-ai/node/models/operations";

let value: QueryParamFilterBy = {
  tags: [
    "premium",
    "beta-user",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `tags`             | *string*[]         | :heavy_minus_sign: | N/A                |