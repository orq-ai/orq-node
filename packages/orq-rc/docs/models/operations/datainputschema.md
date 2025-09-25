# DataInputSchema

The original MCP tool input schema for LLM conversion

## Example Usage

```typescript
import { DataInputSchema } from "@orq-ai/node/models/operations";

let value: DataInputSchema = {
  type: "object",
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [operations.GetAllToolsDataToolsResponse200ApplicationJSONResponseBodyType](../../models/operations/getalltoolsdatatoolsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `properties`                                                                                                                                                           | Record<string, *any*>                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `required`                                                                                                                                                             | *string*[]                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                     | N/A                                                                                                                                                                    |