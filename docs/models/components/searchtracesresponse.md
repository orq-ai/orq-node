# SearchTracesResponse

## Example Usage

```typescript
import { SearchTracesResponse } from "@orq-ai/node/models/components";

let value: SearchTracesResponse = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `object`                                                                                       | [components.SearchTracesResponseObject](../../models/components/searchtracesresponseobject.md) | :heavy_minus_sign:                                                                             | Object discriminator; always `list`.                                                           |
| `data`                                                                                         | [components.TraceSummary](../../models/components/tracesummary.md)[]                           | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `hasMore`                                                                                      | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `nextPageToken`                                                                                | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `meta`                                                                                         | [components.TraceSearchMeta](../../models/components/tracesearchmeta.md)                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |