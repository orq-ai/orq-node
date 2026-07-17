# QueryWebhooksRequest

## Example Usage

```typescript
import { QueryWebhooksRequest } from "@orq-ai/node/models/components";

let value: QueryWebhooksRequest = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `pagination`                                                                         | [components.QueryParamsPagination](../../models/components/queryparamspagination.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `sortingProps`                                                                       | [components.QueryParamsSort](../../models/components/queryparamssort.md)[]           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `query`                                                                              | [components.Query](../../models/components/query.md)                                 | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `filters`                                                                            | [components.Filters](../../models/components/filters.md)[]                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `includedFields`                                                                     | Record<string, *string*>                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |