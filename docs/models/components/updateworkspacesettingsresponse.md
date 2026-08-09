# UpdateWorkspaceSettingsResponse

## Example Usage

```typescript
import { UpdateWorkspaceSettingsResponse } from "@orq-ai/node/models/components";

let value: UpdateWorkspaceSettingsResponse = {
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
| `settings`                                                                   | [components.WorkspaceSettings](../../models/components/workspacesettings.md) | :heavy_check_mark:                                                           | Updated workspace settings.                                                  |