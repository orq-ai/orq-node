# UpdateAgentResponseFormatAgentsResponseJSONObject



JSON object response format. An older method of generating JSON responses. Using `json_schema` is recommended for models that support it. Note that the model will not generate JSON without a system or user message instructing it to do so.

## Example Usage

```typescript
import { UpdateAgentResponseFormatAgentsResponseJSONObject } from "@orq-ai/node/models/operations";

let value: UpdateAgentResponseFormatAgentsResponseJSONObject = {
  type: "json_object",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | [operations.UpdateAgentResponseFormatAgentsResponse200Type](../../models/operations/updateagentresponseformatagentsresponse200type.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |