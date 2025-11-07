# ListAgentTasksResponseFormatAgentsJSONObject



JSON object response format. An older method of generating JSON responses. Using `json_schema` is recommended for models that support it. Note that the model will not generate JSON without a system or user message instructing it to do so.

## Example Usage

```typescript
import { ListAgentTasksResponseFormatAgentsJSONObject } from "@orq-ai/node/models/operations";

let value: ListAgentTasksResponseFormatAgentsJSONObject = {
  type: "json_object",
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                     | [operations.ListAgentTasksResponseFormatAgentsResponse200ApplicationJSONType](../../models/operations/listagenttasksresponseformatagentsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |