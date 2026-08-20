# ListModelCatalogOfferingsResponse

## Example Usage

```typescript
import { ListModelCatalogOfferingsResponse } from "@orq-ai/node/models/components";

let value: ListModelCatalogOfferingsResponse = {
  object: "<value>",
  data: [],
  hasMore: true,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `object`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | Object discriminator for list responses; always `list`.                     |
| `data`                                                                      | [components.Model](../../models/components/model.md)[]                      | :heavy_check_mark:                                                          | Page of catalog offerings, ordered by `offering_of` then `id`.              |
| `hasMore`                                                                   | *boolean*                                                                   | :heavy_check_mark:                                                          | Whether more offerings are available in the selected pagination<br/> direction. |