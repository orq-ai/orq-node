# ResponseBodyDocument

Document to run OCR on. Can be a DocumentURLChunk or ImageURLChunk.


## Supported Types

### `operations.RetrieveAnnotationQueueItemDocument1`

```typescript
const value: operations.RetrieveAnnotationQueueItemDocument1 = {
  type: "document_url",
  documentUrl: "https://fat-status.name",
};
```

### `operations.RetrieveAnnotationQueueItemDocument2`

```typescript
const value: operations.RetrieveAnnotationQueueItemDocument2 = {
  type: "image_url",
  imageUrl: "https://triangular-fishery.biz",
};
```

