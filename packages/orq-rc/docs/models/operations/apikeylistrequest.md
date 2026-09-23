# ApiKeyListRequest

## Example Usage

```typescript
import { ApiKeyListRequest } from "@orq-ai/node/models/operations";

let value: ApiKeyListRequest = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Only return keys bound to this project. When omitted, every key visible to the caller is returned. |
| `source`                                                                                           | [operations.QueryParamSource](../../models/operations/queryparamsource.md)                         | :heavy_minus_sign:                                                                                 | Only return keys of this source.                                                                   |