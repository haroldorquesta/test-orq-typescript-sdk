# GetAllPromptsItemsPromptsResponse200ApplicationJSONContent

The contents of the user message. Either the text content of the message or an array of content parts with a defined type, each can be of type `text` or `image_url` when passing in images. You can pass multiple images by adding multiple `image_url` content parts. 


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `operations.GetAllPromptsContentPromptsResponse200ApplicationJson2[]`

```typescript
const value:
  operations.GetAllPromptsContentPromptsResponse200ApplicationJson2[] = [
    {
      type: "text",
      text: "<value>",
    },
  ];
```
