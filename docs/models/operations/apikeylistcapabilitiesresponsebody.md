# ApiKeyListCapabilitiesResponseBody

The capability catalog

## Example Usage

```typescript
import { ApiKeyListCapabilitiesResponseBody } from "@orq-ai/node/models/operations";

let value: ApiKeyListCapabilitiesResponseBody = {
  domains: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `domains`                                                                                     | [components.Domain](../../models/components/domain.md)[]                                      | :heavy_check_mark:                                                                            | Full capability catalog. Order is stable: workspace-admin first, then platform, then gateway. |