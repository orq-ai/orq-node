# State

The content to evaluate. A string, an object or an array. For OpenAI GPT-6 Luna, strings are passed as text and objects or ordinary JSON arrays are serialized as text. User-message arrays accept string content or input_text/input_image parts. Images must be inline base64 data URLs, with at most 128 images across the request. Remote image URLs, file IDs, audio, non-user roles, bare content parts and tool items are rejected.


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

