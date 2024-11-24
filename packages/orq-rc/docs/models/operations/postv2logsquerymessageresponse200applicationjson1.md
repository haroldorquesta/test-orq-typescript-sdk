# PostV2LogsQueryMessageResponse200ApplicationJson1

## Example Usage

```typescript
import { PostV2LogsQueryMessageResponse200ApplicationJson1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryMessageResponse200ApplicationJson1 = {
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

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                                                 | [operations.PostV2LogsQueryMessageResponse200ApplicationJSONResponseBodyItems3Role](../../models/operations/postv2logsquerymessageresponse200applicationjsonresponsebodyitems3role.md) | :heavy_check_mark:                                                                                                                                                                     | The role of the prompt message                                                                                                                                                         |
| `content`                                                                                                                                                                              | *string*                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `toolCalls`                                                                                                                                                                            | [operations.PostV2LogsQueryMessageResponse200ApplicationJSONToolCalls](../../models/operations/postv2logsquerymessageresponse200applicationjsontoolcalls.md)[]                         | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |