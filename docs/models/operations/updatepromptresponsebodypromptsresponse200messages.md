# UpdatePromptResponseBodyPromptsResponse200Messages

## Example Usage

```typescript
import { UpdatePromptResponseBodyPromptsResponse200Messages } from "orq-poc-typescript-multi-env-version/models/operations";

let value: UpdatePromptResponseBodyPromptsResponse200Messages = {
  role: "exception",
  content: [
    {
      type: "text",
      text: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                                                                                                                                   | [operations.UpdatePromptResponseBodyPromptsResponse200Role](../../models/operations/updatepromptresponsebodypromptsresponse200role.md)                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                                                       | The role of the prompt message                                                                                                                                                                                                                                           |
| `content`                                                                                                                                                                                                                                                                | *operations.UpdatePromptResponseBodyPromptsResponse200Content*                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                       | The contents of the user message. Either the text content of the message or an array of content parts with a defined type, each can be of type `text` or `image_url` when passing in images. You can pass multiple images by adding multiple `image_url` content parts.  |
| `toolCalls`                                                                                                                                                                                                                                                              | [operations.UpdatePromptResponseBodyPromptsResponse200ToolCalls](../../models/operations/updatepromptresponsebodypromptsresponse200toolcalls.md)[]                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |