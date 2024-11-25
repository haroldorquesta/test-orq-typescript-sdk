# GetV2LogsIdMessageResponse2001

## Example Usage

```typescript
import { GetV2LogsIdMessageResponse2001 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdMessageResponse2001 = {
  role: "tool",
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

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                                                               | [operations.GetV2LogsIdMessageResponse200ApplicationJSONResponseBody4Role](../../models/operations/getv2logsidmessageresponse200applicationjsonresponsebody4role.md) | :heavy_check_mark:                                                                                                                                                   | The role of the prompt message                                                                                                                                       |
| `content`                                                                                                                                                            | *string*                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                   | N/A                                                                                                                                                                  |
| `toolCalls`                                                                                                                                                          | [operations.GetV2LogsIdMessageResponse200ToolCalls](../../models/operations/getv2logsidmessageresponse200toolcalls.md)[]                                             | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |