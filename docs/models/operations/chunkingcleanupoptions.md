# ChunkingCleanupOptions

The cleanup options applied to the datasource content. All options are enabled by default to ensure enhanced security and optimal chunk quality. Defaults to system-standard cleanup options if not specified.

## Example Usage

```typescript
import { ChunkingCleanupOptions } from "@orq-ai/node/models/operations";

let value: ChunkingCleanupOptions = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `deleteEmails`                                                         | *boolean*                                                              | :heavy_minus_sign:                                                     | Removes email addresses from the provided text.                        |
| `deleteCreditCards`                                                    | *boolean*                                                              | :heavy_minus_sign:                                                     | Removes credit card numbers from the provided text.                    |
| `deletePhoneNumbers`                                                   | *boolean*                                                              | :heavy_minus_sign:                                                     | Removes phone numbers from the provided text.                          |
| `cleanBulletPoints`                                                    | *boolean*                                                              | :heavy_minus_sign:                                                     | Removes bullet points formatting from the text.                        |
| `cleanNumberedList`                                                    | *boolean*                                                              | :heavy_minus_sign:                                                     | Removes numbered list formatting from the text.                        |
| `cleanUnicode`                                                         | *boolean*                                                              | :heavy_minus_sign:                                                     | Normalizes or removes unnecessary unicode characters from the text.    |
| `cleanDashes`                                                          | *boolean*                                                              | :heavy_minus_sign:                                                     | Normalizes or removes various dash characters to standardize the text. |
| `cleanWhitespaces`                                                     | *boolean*                                                              | :heavy_minus_sign:                                                     | Trims and normalizes excessive whitespace throughout the text.         |