# CreateDecisionsState

The content to evaluate. A string, an object or an array. For TypeSafe models, reference images declared in assets by writing their reference string. Native OpenAI accepts messages and function/custom-tool history. User messages support input_text, input_image and input_json; images can use inline base64 data URLs or public HTTP(S) URLs. At most 128 images across state and question instructions. Shared text/image parts support explicit prompt_cache_breakpoint markers. File IDs, audio, item references and bare content parts are unsupported. Other objects and arrays are serialized as text.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "key": "<value>",
  "key1": "<value>",
  "key2": "<value>",
};
```

### `any[]`

```typescript
const value: any[] = [
  "<value 1>",
  "<value 2>",
  "<value 3>",
];
```

