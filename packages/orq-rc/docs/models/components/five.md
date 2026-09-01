# Five

Splits on a separator hierarchy, falling back through paragraph, line, sentence, and word boundaries until chunks fit. Respects document structure.

## Example Usage

```typescript
import { Five } from "@orq-ai/node/models/components";

let value: Five = {
  type: "recursive",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | *"recursive"*                                                                                        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `chunkSize`                                                                                          | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Maximum number of tokens per chunk.                                                                  |
| `separators`                                                                                         | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | Separator hierarchy to split on, tried in order. Defaults to paragraph, line, space, then character. |
| `minCharactersPerChunk`                                                                              | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Minimum number of characters each chunk must contain.                                                |