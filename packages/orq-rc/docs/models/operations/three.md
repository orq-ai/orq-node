# Three

A content part within an agent_message item.


## Supported Types

### `operations.ThreeText`

```typescript
const value: operations.ThreeText = {
  text: "<value>",
  type: "input_text",
};
```

### `operations.ThreeImage`

```typescript
const value: operations.ThreeImage = {
  type: "input_image",
};
```

### `operations.EncryptedContent`

```typescript
const value: operations.EncryptedContent = {
  encryptedContent: "<value>",
  type: "encrypted_content",
};
```

