# GetV2LogsIdMessageResponse200ApplicationJSONResponseBody11

## Example Usage

```typescript
import { GetV2LogsIdMessageResponse200ApplicationJSONResponseBody11 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdMessageResponse200ApplicationJSONResponseBody11 = {
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

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                                           | [operations.GetV2LogsIdMessageResponse200ApplicationJSONResponseBody1Role](../../models/operations/getv2logsidmessageresponse200applicationjsonresponsebody1role.md)             | :heavy_check_mark:                                                                                                                                                               | The role of the prompt message                                                                                                                                                   |
| `content`                                                                                                                                                                        | *string*                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `toolCalls`                                                                                                                                                                      | [operations.GetV2LogsIdMessageResponse200ApplicationJSONResponseBody1ToolCalls](../../models/operations/getv2logsidmessageresponse200applicationjsonresponsebody1toolcalls.md)[] | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |