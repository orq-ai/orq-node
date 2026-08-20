# ListModelCatalogResponse

## Example Usage

```typescript
import { ListModelCatalogResponse } from "@orq-ai/node/models/components";

let value: ListModelCatalogResponse = {
  object: "<value>",
  data: [],
  hasMore: false,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `object`                                                                  | *string*                                                                  | :heavy_check_mark:                                                        | Object discriminator for list responses; always `list`.                   |
| `data`                                                                    | [components.Model](../../models/components/model.md)[]                    | :heavy_check_mark:                                                        | Page of catalog entries.                                                  |
| `hasMore`                                                                 | *boolean*                                                                 | :heavy_check_mark:                                                        | Whether more entries are available in the selected pagination<br/> direction. |