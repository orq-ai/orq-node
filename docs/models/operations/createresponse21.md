# CreateResponse21

A text input content part

## Example Usage

```typescript
import { CreateResponse21 } from "@orq-ai/node/models/operations";

let value: CreateResponse21 = {
  type: "input_text",
  text: "<value>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `type`                    | *"input_text"*            | :heavy_check_mark:        | The type of input content |
| `text`                    | *string*                  | :heavy_check_mark:        | The text content          |