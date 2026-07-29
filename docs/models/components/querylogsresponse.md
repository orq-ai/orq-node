# QueryLogsResponse

## Example Usage

```typescript
import { QueryLogsResponse } from "@orq-ai/node/models/components";

let value: QueryLogsResponse = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `object`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | Object discriminator; always "query". Mirrors QueryTracesResponse.             |
| `search`                                                                       | [components.SearchLogsResponse](../../models/components/searchlogsresponse.md) | :heavy_minus_sign:                                                             | N/A                                                                            |