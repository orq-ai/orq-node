# GetPromptVersionRequest

## Example Usage

```typescript
import { GetPromptVersionRequest } from "@orq-ai/node/models/operations";

let value: GetPromptVersionRequest = {
  promptId: "<id>",
  versionId: "<id>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `promptId`                                  | *string*                                    | :heavy_check_mark:                          | The unique identifier of the prompt         |
| `versionId`                                 | *string*                                    | :heavy_check_mark:                          | The unique identifier of the prompt version |