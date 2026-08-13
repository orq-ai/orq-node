# ListManagementCapabilitiesResponse

## Example Usage

```typescript
import { ListManagementCapabilitiesResponse } from "@orq-ai/node/models/components";

let value: ListManagementCapabilitiesResponse = {
  domains: [
    {},
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `domains`                                                                    | [components.ManagementDomain](../../models/components/managementdomain.md)[] | :heavy_check_mark:                                                           | Full management capability catalog.                                          |