# CreateEnvironmentResponse

## Example Usage

```typescript
import { CreateEnvironmentResponse } from "@orq-ai/node/models/components";

let value: CreateEnvironmentResponse = {
  environment: {
    id: "<id>",
    slug: "<value>",
    displayName: "Ralph_Ondricka",
    description: "as narrow decide",
    createdAt: new Date("2026-07-17T06:43:57.931Z"),
    createdById: "<id>",
    updatedAt: new Date("2025-06-18T01:12:31.382Z"),
    updatedById: "<id>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `environment`                                                    | [components.Environment](../../models/components/environment.md) | :heavy_check_mark:                                               | N/A                                                              |