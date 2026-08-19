# StructuredToolCall

StructuredToolCall mirrors one tool invocation and its result. Name is the
 only field the grader requires; a call without one is dropped.

## Example Usage

```typescript
import { StructuredToolCall } from "@orq-ai/node/models/components";

let value: StructuredToolCall = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_minus_sign: | N/A                |
| `arguments`        | *string*           | :heavy_minus_sign: | N/A                |
| `output`           | *string*           | :heavy_minus_sign: | N/A                |