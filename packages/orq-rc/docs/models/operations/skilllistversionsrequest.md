# SkillListVersionsRequest

## Example Usage

```typescript
import { SkillListVersionsRequest } from "@orq-ai/node/models/operations";

let value: SkillListVersionsRequest = {
  skillId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `skillId`          | *string*           | :heavy_check_mark: | N/A                |
| `limit`            | *number*           | :heavy_minus_sign: | N/A                |
| `startingAfter`    | *string*           | :heavy_minus_sign: | N/A                |
| `endingBefore`     | *string*           | :heavy_minus_sign: | N/A                |