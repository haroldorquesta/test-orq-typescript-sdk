# PostV2LogsQueryEvalsResponse200Messages

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse200Messages } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse200Messages = {
  role: "tool",
  content: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                                                                                                                                   | [operations.PostV2LogsQueryEvalsResponse200Role](../../models/operations/postv2logsqueryevalsresponse200role.md)                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                       | The role of the prompt message                                                                                                                                                                                                                                           |
| `content`                                                                                                                                                                                                                                                                | *operations.PostV2LogsQueryEvalsResponse200Content*                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                       | The contents of the user message. Either the text content of the message or an array of content parts with a defined type, each can be of type `text` or `image_url` when passing in images. You can pass multiple images by adding multiple `image_url` content parts.  |
| `toolCalls`                                                                                                                                                                                                                                                              | [operations.PostV2LogsQueryEvalsResponse200ToolCalls](../../models/operations/postv2logsqueryevalsresponse200toolcalls.md)[]                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |
| `id`                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                       | The id of the resource                                                                                                                                                                                                                                                   |