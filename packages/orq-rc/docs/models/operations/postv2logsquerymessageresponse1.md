# PostV2LogsQueryMessageResponse1

## Example Usage

```typescript
import { PostV2LogsQueryMessageResponse1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryMessageResponse1 = {
  role: "user",
  toolCalls: [
    {
      type: "function",
      function: {
        name: "<value>",
        arguments: "<value>",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                             | [operations.PostV2LogsQueryMessageResponse200ApplicationJSONRole](../../models/operations/postv2logsquerymessageresponse200applicationjsonrole.md) | :heavy_check_mark:                                                                                                                                 | The role of the prompt message                                                                                                                     |
| `content`                                                                                                                                          | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | N/A                                                                                                                                                |
| `toolCalls`                                                                                                                                        | [operations.PostV2LogsQueryMessageResponseToolCalls](../../models/operations/postv2logsquerymessageresponsetoolcalls.md)[]                         | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |