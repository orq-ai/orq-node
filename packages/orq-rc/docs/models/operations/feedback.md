# Feedback

Feedback from the user on the completion

## Example Usage

```typescript
import { Feedback } from "@orq-ai/node/models/operations";

let value: Feedback = {
  score: 881721,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `score`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | The feedback score. This allow you to come with specific logic on what a `score` number means |