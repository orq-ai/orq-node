# ModelModalities

## Example Usage

```typescript
import { ModelModalities } from "@orq-ai/node/models/components";

let value: ModelModalities = {
  input: [],
  output: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `input`                                      | *string*[]                                   | :heavy_check_mark:                           | Modalities this offering accepts as input.   |
| `output`                                     | *string*[]                                   | :heavy_check_mark:                           | Modalities this offering produces as output. |