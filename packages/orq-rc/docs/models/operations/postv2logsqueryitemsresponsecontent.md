# PostV2LogsQueryItemsResponseContent

The contents of the user message. Either the text content of the message or an array of content parts with a defined type, each can be of type `text` or `image_url` when passing in images. You can pass multiple images by adding multiple `image_url` content parts. 


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `operations.PostV2LogsQueryContentResponse2002[]`

```typescript
const value: operations.PostV2LogsQueryContentResponse2002[] = [
  {
    type: "text",
    text: "<value>",
  },
];
```
