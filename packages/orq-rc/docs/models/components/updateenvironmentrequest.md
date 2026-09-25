# UpdateEnvironmentRequest

## Example Usage

```typescript
import { UpdateEnvironmentRequest } from "@orq-ai/node/models/components";

let value: UpdateEnvironmentRequest = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `displayName`                                                                                       | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `description`                                                                                       | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `sharing`                                                                                           | [components.Sharing](../../models/components/sharing.md)                                            | :heavy_minus_sign:                                                                                  | Sharing controls which projects in the workspace may use this entity and<br/> what they may do with it. |