# CreateRerankCache

Cache configuration for the request.

## Example Usage

```typescript
import { CreateRerankCache } from "@orq-ai/node/models/operations";

let value: CreateRerankCache = {
  ttl: 3600,
  type: "exact_match",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `ttl`                                                                          | *number*                                                                       | :heavy_minus_sign:                                                             | Time to live for cached responses in seconds. Maximum 259200 seconds (3 days). | 3600                                                                           |
| `type`                                                                         | [operations.CreateRerankType](../../models/operations/createreranktype.md)     | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |