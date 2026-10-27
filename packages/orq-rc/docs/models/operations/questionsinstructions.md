# QuestionsInstructions

The evaluation prompt for this question. A string, an object or an array. Native OpenAI also accepts arrays of input_text, input_image and input_json parts. Question parts cannot contain prompt cache breakpoints.


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

