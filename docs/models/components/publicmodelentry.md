# PublicModelEntry

## Example Usage

```typescript
import { PublicModelEntry } from "@orq-ai/node/models/components";

let value: PublicModelEntry = {
  created: 569802,
  id: "<id>",
  object: "model",
  ownedBy: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `created`                                                                              | *number*                                                                               | :heavy_check_mark:                                                                     | Unix timestamp (seconds) when the model was added.                                     |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Model identifier in provider/model format (e.g. openai/gpt-4o).                        |
| `object`                                                                               | [components.PublicModelEntryObject](../../models/components/publicmodelentryobject.md) | :heavy_check_mark:                                                                     | Always "model".                                                                        |
| `ownedBy`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | The provider that owns the model (e.g. openai, anthropic).                             |