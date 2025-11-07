# GetAgentResponseFormatAgentsJSONObject



JSON object response format. An older method of generating JSON responses. Using `json_schema` is recommended for models that support it. Note that the model will not generate JSON without a system or user message instructing it to do so.

## Example Usage

```typescript
import { GetAgentResponseFormatAgentsJSONObject } from "@orq-ai/node/models/operations";

let value: GetAgentResponseFormatAgentsJSONObject = {
  type: "json_object",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                         | [operations.GetAgentResponseFormatAgentsResponse200ApplicationJSONType](../../models/operations/getagentresponseformatagentsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |