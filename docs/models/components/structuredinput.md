# StructuredInput

StructuredInput names its fields after the template variables they feed, so
 input.user_query in a prompt is user_query here.

## Example Usage

```typescript
import { StructuredInput } from "@orq-ai/node/models/components";

let value: StructuredInput = {};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `systemInstructions` | *string*             | :heavy_minus_sign:   | N/A                  |
| `userQuery`          | *string*             | :heavy_minus_sign:   | N/A                  |
| `retrievals`         | *string*[]           | :heavy_minus_sign:   | N/A                  |
| `expectedOutput`     | *string*             | :heavy_minus_sign:   | N/A                  |