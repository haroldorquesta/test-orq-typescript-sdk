# ResponseBodyMessages

## Example Usage

```typescript
import { ResponseBodyMessages } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseBodyMessages = {
  role: "user",
  content: [
    {
      type: "image_url",
      imageUrl: {
        url: "https://inferior-lifestyle.org",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                                                                                                                                   | [operations.ResponseBodyRole](../../models/operations/responsebodyrole.md)                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                       | The role of the prompt message                                                                                                                                                                                                                                           |
| `content`                                                                                                                                                                                                                                                                | *operations.ResponseBodyContent*                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                       | The contents of the user message. Either the text content of the message or an array of content parts with a defined type, each can be of type `text` or `image_url` when passing in images. You can pass multiple images by adding multiple `image_url` content parts.  |
| `toolCalls`                                                                                                                                                                                                                                                              | [operations.ResponseBodyToolCalls](../../models/operations/responsebodytoolcalls.md)[]                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |
| `id`                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                       | The id of the resource                                                                                                                                                                                                                                                   |