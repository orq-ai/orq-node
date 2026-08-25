# DatasourcesServiceListResponse

## Example Usage

```typescript
import { DatasourcesServiceListResponse } from "@orq-ai/node/models/components";

let value: DatasourcesServiceListResponse = {
  object: "list",
  data: [],
  hasMore: true,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `object`                                                                                                           | [components.DatasourcesServiceListResponseObject](../../models/components/datasourcesservicelistresponseobject.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `data`                                                                                                             | [components.Datasource](../../models/components/datasource.md)[]                                                   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `hasMore`                                                                                                          | *boolean*                                                                                                          | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |