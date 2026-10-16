# McpSkillFile

A file of an upstream skill, as listed in the skill's manifest.

## Example Usage

```typescript
import { McpSkillFile } from "@orq-ai/node/models/components";

let value: McpSkillFile = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uri`                                                                | *string*                                                             | :heavy_minus_sign:                                                   | Resource URI of the file on the upstream server.                     |
| `digest`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | SHA-256 digest of the file's raw bytes, formatted as `sha256:{hex}`. |
| `size`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | Length in bytes of the file's raw content.                           |