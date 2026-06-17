# Thread

## Example Usage

```typescript
import { Thread } from "@orq-ai/node/models/components";

let value: Thread = {
  id: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | *string*                                               | :heavy_check_mark:                                     | Unique thread identifier to group related invocations. |
| `tags`                                                 | *string*[]                                             | :heavy_minus_sign:                                     | Optional tags to differentiate or categorize threads   |