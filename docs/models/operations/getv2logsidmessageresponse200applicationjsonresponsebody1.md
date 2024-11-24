# GetV2LogsIdMessageResponse200ApplicationJSONResponseBody1

## Example Usage

```typescript
import { GetV2LogsIdMessageResponse200ApplicationJSONResponseBody1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdMessageResponse200ApplicationJSONResponseBody1 = {
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

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                                         | [operations.GetV2LogsIdMessageResponse200ApplicationJSONResponseBody2EvalsRole](../../models/operations/getv2logsidmessageresponse200applicationjsonresponsebody2evalsrole.md) | :heavy_check_mark:                                                                                                                                                             | The role of the prompt message                                                                                                                                                 |
| `content`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `toolCalls`                                                                                                                                                                    | [operations.GetV2LogsIdMessageResponse200ApplicationJSONResponseBodyToolCalls](../../models/operations/getv2logsidmessageresponse200applicationjsonresponsebodytoolcalls.md)[] | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |