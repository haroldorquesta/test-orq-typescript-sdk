# GetV2LogsIdEvalsMessages

## Example Usage

```typescript
import { GetV2LogsIdEvalsMessages } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsMessages = {
  role: "tool",
  content: [
    {
      type: "image_url",
      imageUrl: {
        url: "https://weird-negotiation.com/",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                                                                                                                                   | [operations.GetV2LogsIdEvalsRole](../../models/operations/getv2logsidevalsrole.md)                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                       | The role of the prompt message                                                                                                                                                                                                                                           |
| `content`                                                                                                                                                                                                                                                                | *operations.GetV2LogsIdEvalsContent*                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                       | The contents of the user message. Either the text content of the message or an array of content parts with a defined type, each can be of type `text` or `image_url` when passing in images. You can pass multiple images by adding multiple `image_url` content parts.  |
| `toolCalls`                                                                                                                                                                                                                                                              | [operations.GetV2LogsIdEvalsToolCalls](../../models/operations/getv2logsidevalstoolcalls.md)[]                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                                      |
| `id`                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                       | The id of the resource                                                                                                                                                                                                                                                   |