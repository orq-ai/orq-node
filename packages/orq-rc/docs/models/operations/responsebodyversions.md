# ResponseBodyVersions

Prompt version model returned from the API

## Example Usage

```typescript
import { ResponseBodyVersions } from "@orq-ai/node/models/operations";

let value: ResponseBodyVersions = {
  id: "<id>",
  createdById: "3d61b499-f34e-4b7b-9662-84a6dc29b818",
  displayName: "Eric.Hane73",
  updatedById: "cf7c2cf8-42e5-4766-9cea-f39abc5e2479",
  promptConfig: {
    messages: [
      {
        role: "expected_output",
        content: "<value>",
      },
    ],
  },
  metadata: {},
  commit: "<value>",
  timestamp: "<value>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `createdById`                                                                                                                                    | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `displayName`                                                                                                                                    | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `updatedById`                                                                                                                                    | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `description`                                                                                                                                    | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |
| `promptConfig`                                                                                                                                   | [operations.UpdatePromptResponseBodyPromptsResponsePromptConfig](../../models/operations/updatepromptresponsebodypromptsresponsepromptconfig.md) | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `metadata`                                                                                                                                       | [operations.UpdatePromptResponseBodyPromptsResponseMetadata](../../models/operations/updatepromptresponsebodypromptsresponsemetadata.md)         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `commit`                                                                                                                                         | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `timestamp`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |