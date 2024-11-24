# GetV2LogsIdMessageResponse1

## Example Usage

```typescript
import { GetV2LogsIdMessageResponse1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdMessageResponse1 = {
  role: "exception",
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

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                     | [operations.GetV2LogsIdMessageResponse200ApplicationJSONRole](../../models/operations/getv2logsidmessageresponse200applicationjsonrole.md) | :heavy_check_mark:                                                                                                                         | The role of the prompt message                                                                                                             |
| `content`                                                                                                                                  | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |
| `toolCalls`                                                                                                                                | [operations.GetV2LogsIdMessageResponseToolCalls](../../models/operations/getv2logsidmessageresponsetoolcalls.md)[]                         | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |