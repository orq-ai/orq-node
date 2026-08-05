# GetWorkspaceSettingsResponse

## Example Usage

```typescript
import { GetWorkspaceSettingsResponse } from "@orq-ai/node/models/components";

let value: GetWorkspaceSettingsResponse = {
  settings: {
    key: "<key>",
    displayName: "Ima89",
    enforceEnabledModels: false,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `settings`                                                                   | [components.WorkspaceSettings](../../models/components/workspacesettings.md) | :heavy_check_mark:                                                           | Current workspace settings.                                                  |