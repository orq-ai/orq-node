# WorkspaceSettings

WorkspaceSettings is the full settings state returned by Get and Update.

## Example Usage

```typescript
import { WorkspaceSettings } from "@orq-ai/node/models/components";

let value: WorkspaceSettings = {
  key: "<key>",
  displayName: "Liam.Thiel",
  enforceEnabledModels: true,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Read-only workspace key/slug. Returned for reference; it cannot be changed<br/> through this service.      |
| `displayName`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Human-readable workspace display name.                                                                     |
| `enforceEnabledModels`                                                                                     | *boolean*                                                                                                  | :heavy_check_mark:                                                                                         | Whether only workspace-enabled models may be served.                                                       |
| `piiRedaction`                                                                                             | [components.PiiRedaction](../../models/components/piiredaction.md)                                         | :heavy_minus_sign:                                                                                         | Workspace-default PII redaction plugin configuration. Omitted when the<br/> workspace has never configured it. |