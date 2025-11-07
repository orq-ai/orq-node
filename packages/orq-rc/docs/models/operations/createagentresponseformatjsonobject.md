# CreateAgentResponseFormatJSONObject



JSON object response format. An older method of generating JSON responses. Using `json_schema` is recommended for models that support it. Note that the model will not generate JSON without a system or user message instructing it to do so.

## Example Usage

```typescript
import { CreateAgentResponseFormatJSONObject } from "@orq-ai/node/models/operations";

let value: CreateAgentResponseFormatJSONObject = {
  type: "json_object",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | [operations.CreateAgentResponseFormatAgentsResponse201Type](../../models/operations/createagentresponseformatagentsresponse201type.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |