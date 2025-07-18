# DataLLM

## Example Usage

```typescript
import { DataLLM } from "@orq-ai/node/models/operations";

let value: DataLLM = {
  id: "<id>",
  description:
    "advertisement list amid vainly bah partially owlishly treble why however",
  type: "llm_eval",
  prompt: "<value>",
  key: "<key>",
  model: "Element",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `description`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `created`                                                                           | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `updated`                                                                           | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `guardrailConfig`                                                                   | *operations.GetEvalsDataEvalsResponse200ApplicationJSONResponseBodyGuardrailConfig* | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `type`                                                                              | [operations.DataType](../../models/operations/datatype.md)                          | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `prompt`                                                                            | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `key`                                                                               | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `model`                                                                             | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |