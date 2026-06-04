# ListModelsResponseBody

Models listed.

## Example Usage

```typescript
import { ListModelsResponseBody } from "@orq-ai/node/models/operations";

let value: ListModelsResponseBody = {
  data: null,
  object: "list",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [components.PublicModelEntry](../../models/components/publicmodelentry.md)[] | :heavy_check_mark:                                                           | Available models.                                                            |
| `object`                                                                     | [operations.ListModelsObject](../../models/operations/listmodelsobject.md)   | :heavy_check_mark:                                                           | Always "list".                                                               |