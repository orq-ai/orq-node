# CreateImageEditPrompt

Prompt configuration for the request

## Example Usage

```typescript
import { CreateImageEditPrompt } from "@orq-ai/node/models/operations";

let value: CreateImageEditPrompt = {
  id: "prompt_01ARZ3NDEKTSV4RRFFQ69G5FAV",
  version: "latest",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Unique identifier of the prompt to use                                                 | prompt_01ARZ3NDEKTSV4RRFFQ69G5FAV                                                      |
| `version`                                                                              | [operations.CreateImageEditVersion](../../models/operations/createimageeditversion.md) | :heavy_check_mark:                                                                     | Version of the prompt to use (currently only "latest" supported)                       | latest                                                                                 |