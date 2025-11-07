# RunAgentResponseFormatAgentsJSONObject



JSON object response format. An older method of generating JSON responses. Using `json_schema` is recommended for models that support it. Note that the model will not generate JSON without a system or user message instructing it to do so.

## Example Usage

```typescript
import { RunAgentResponseFormatAgentsJSONObject } from "@orq-ai/node/models/operations";

let value: RunAgentResponseFormatAgentsJSONObject = {
  type: "json_object",
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                     | [operations.RunAgentResponseFormatAgentsRequestRequestBodyFallbackModelsType](../../models/operations/runagentresponseformatagentsrequestrequestbodyfallbackmodelstype.md) | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |