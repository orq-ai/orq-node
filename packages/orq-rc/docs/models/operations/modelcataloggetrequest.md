# ModelCatalogGetRequest

## Example Usage

```typescript
import { ModelCatalogGetRequest } from "@orq-ai/node/models/operations";

let value: ModelCatalogGetRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | Catalog identifier, `<provider>/<model>` (for example `openai/gpt-4o`). |