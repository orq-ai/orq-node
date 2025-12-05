# TextPart

Text content part. Use this to send text messages to the agent.

## Example Usage

```typescript
import { TextPart } from "@orq-ai/node/models/components";

let value: TextPart = {
  kind: "text",
  text: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `kind`             | *"text"*           | :heavy_check_mark: | N/A                |
| `text`             | *string*           | :heavy_check_mark: | N/A                |