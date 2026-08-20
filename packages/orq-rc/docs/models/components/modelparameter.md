# ModelParameter

## Example Usage

```typescript
import { ModelParameter } from "@orq-ai/node/models/components";

let value: ModelParameter = {
  name: "<value>",
  parameter: "<value>",
  type: "<value>",
  description: "boo a that",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `name`                                               | *string*                                             | :heavy_check_mark:                                   | Display name shown in the playground.                |
| `parameter`                                          | *string*                                             | :heavy_check_mark:                                   | API parameter key (e.g. `temperature`, `maxTokens`). |
| `type`                                               | *string*                                             | :heavy_check_mark:                                   | Widget type: slider, select, toggle or text.         |
| `description`                                        | *string*                                             | :heavy_check_mark:                                   | Help text shown to playground users.                 |