# UpdatePromptResponseFormatJSONObject



JSON object response format. An older method of generating JSON responses. Using `json_schema` is recommended for models that support it. Note that the model will not generate JSON without a system or user message instructing it to do so.

## Example Usage

```typescript
import { UpdatePromptResponseFormatJSONObject } from "@orq-ai/node/models/operations";

let value: UpdatePromptResponseFormatJSONObject = {
  type: "json_object",
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                               | [operations.UpdatePromptResponseFormatPromptsRequestRequestBodyPromptType](../../models/operations/updatepromptresponseformatpromptsrequestrequestbodyprompttype.md) | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |