# FacetGroup

FacetGroup is one attribute family in the facet hierarchy. name is one of
 "native" (promoted columns), "attribute" (log_attributes), "resource"
 (resource_attributes), or "scope" (scope_attributes).

## Example Usage

```typescript
import { FacetGroup } from "@orq-ai/node/models/components";

let value: FacetGroup = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `keys`                                                       | [components.FacetKey](../../models/components/facetkey.md)[] | :heavy_minus_sign:                                           | N/A                                                          |