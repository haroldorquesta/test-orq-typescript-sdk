# ItemsMessages

## Example Usage

```typescript
import { ItemsMessages } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ItemsMessages = {
  role: "system",
  content: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                                                                                                                                   | [operations.ItemsRole](../../models/operations/itemsrole.md)                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                       | The role of the prompt message                                                                                                                                                                                                                                           |
| `content`                                                                                                                                                                                                                                                                | *operations.ItemsContent*                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                       | The contents of the user message. Either the text content of the message or an array of content parts with a defined type, each can be of type `text` or `image_url` when passing in images. You can pass multiple images by adding multiple `image_url` content parts.  |
| `toolCalls`                                                                                                                                                                                                                                                              | [operations.ItemsToolCalls](../../models/operations/itemstoolcalls.md)[]                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |