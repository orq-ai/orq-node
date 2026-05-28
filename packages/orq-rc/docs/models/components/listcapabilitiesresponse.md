# ListCapabilitiesResponse

## Example Usage

```typescript
import { ListCapabilitiesResponse } from "@orq-ai/node/models/components";

let value: ListCapabilitiesResponse = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `domains`                                                                                      | [components.Domain](../../models/components/domain.md)[]                                       | :heavy_minus_sign:                                                                             | Full capability catalog. Order is stable: workspace-admin first,<br/> then platform, then gateway. |