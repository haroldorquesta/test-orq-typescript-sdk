# PostV2LogsQueryMessageResponse200ApplicationJSONResponseBodyItems11

## Example Usage

```typescript
import { PostV2LogsQueryMessageResponse200ApplicationJSONResponseBodyItems11 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryMessageResponse200ApplicationJSONResponseBodyItems11 =
  {
    role: "assistant",
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

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                                                             | [operations.PostV2LogsQueryMessageResponse200ApplicationJSONResponseBodyItems1Role](../../models/operations/postv2logsquerymessageresponse200applicationjsonresponsebodyitems1role.md)             | :heavy_check_mark:                                                                                                                                                                                 | The role of the prompt message                                                                                                                                                                     |
| `content`                                                                                                                                                                                          | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |
| `toolCalls`                                                                                                                                                                                        | [operations.PostV2LogsQueryMessageResponse200ApplicationJSONResponseBodyItems1ToolCalls](../../models/operations/postv2logsquerymessageresponse200applicationjsonresponsebodyitems1toolcalls.md)[] | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |