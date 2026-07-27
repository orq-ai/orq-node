# FacetKey

FacetKey is one facetable key inside a group, with its observed volume and
 top values for the requested range. field is the name usable in filters /
 sort (e.g. "attribute.http.method" or "service_name"); it is empty when the
 key is not filterable (the scope group).

## Example Usage

```typescript
import { FacetKey } from "@orq-ai/node/models/components";

let value: FacetKey = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `key`                                                            | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `field`                                                          | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `logCount`                                                       | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `distinctValueCount`                                             | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `topValues`                                                      | [components.FacetValue](../../models/components/facetvalue.md)[] | :heavy_minus_sign:                                               | N/A                                                              |
| `filterable`                                                     | *boolean*                                                        | :heavy_minus_sign:                                               | N/A                                                              |