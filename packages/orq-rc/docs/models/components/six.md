# Six

Splits on delimiters or a regular expression without tokenizing. Fastest option; chunk sizes vary with where delimiters fall.

## Example Usage

```typescript
import { Six } from "@orq-ai/node/models/components";

let value: Six = {
  type: "fast",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `type`                                                                                      | *"fast"*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `targetSize`                                                                                | *number*                                                                                    | :heavy_minus_sign:                                                                          | Target chunk size in bytes.                                                                 |
| `delimiters`                                                                                | *string*                                                                                    | :heavy_minus_sign:                                                                          | Single-byte characters to split on.                                                         |
| `pattern`                                                                                   | *string*                                                                                    | :heavy_minus_sign:                                                                          | Multi-byte split pattern. Takes precedence over delimiters when set.                        |
| `prefix`                                                                                    | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | Attach the delimiter to the start of the next chunk instead of the end of the previous one. |
| `consecutive`                                                                               | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | Split at the start of a run of consecutive delimiters rather than at each one.              |
| `forwardFallback`                                                                           | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | Search forward for a delimiter when searching backward finds none.                          |