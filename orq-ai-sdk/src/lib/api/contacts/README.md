# Contacts

The Contacts API allows you to create and manage contact information in the orq.ai API. This is useful for associating
user data with AI interactions.

## Set the contact using the client

To set a contact ID in the store and create a contact simultaneously, use the exposed `set_contact` method from the
client:

```ts:
client.setContact({
	id: "user123",
	display_name: "John Doe",
	email: "john@example.com",
	avatar_url: "https://example.com/avatar.jpg",
	metadata: { role: "admin" },
});
```

This method combines setting the contact ID in the store and creating a contact in one operation.

## Creating a Contact

To create a contact, use the `create` method of the `client.contacts`:

```ts
try {
  const contact = client.contacts.create({
    external_id: 'user123',
    display_name: 'John Doe',
    email: 'john@example.com',
    metadata: { role: 'admin', department: 'IT' },
    avatar_url: 'https://example.com/avatar.jpg',
  });
} catch (e) {
  console.error(e);
}
```

## Best Practices

1. Always provide a unique `external_id` for each contact. This helps in identifying and managing contacts in your
   system.

2. Handle errors appropriately when creating contacts, as network issues or validation errors may occur.

3. Ensure that the `email` and `avatar_url` fields, if provided, are in valid formats to avoid validation errors.

4. Use the `metadata` field to store additional information about the contact that doesn't fit into the standard fields.

## Error Handling

- If `external_id` is not provided, an `Error` will be raised.
- If the API request fails, an HTTP error will be raised. You should handle these exceptions in your code.
