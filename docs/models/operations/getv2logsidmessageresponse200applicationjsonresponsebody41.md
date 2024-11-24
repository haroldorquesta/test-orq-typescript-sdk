# GetV2LogsIdMessageResponse200ApplicationJSONResponseBody41

## Example Usage

```typescript
import { GetV2LogsIdMessageResponse200ApplicationJSONResponseBody41 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdMessageResponse200ApplicationJSONResponseBody41 = {
  role: "correction",
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

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                                                                 | [operations.GetV2LogsIdMessageResponse200ApplicationJSONResponseBody4Evals7WorkflowRunRole](../../models/operations/getv2logsidmessageresponse200applicationjsonresponsebody4evals7workflowrunrole.md) | :heavy_check_mark:                                                                                                                                                                                     | The role of the prompt message                                                                                                                                                                         |
| `content`                                                                                                                                                                                              | *string*                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |
| `toolCalls`                                                                                                                                                                                            | [operations.GetV2LogsIdMessageResponse200ApplicationJSONResponseBody4ToolCalls](../../models/operations/getv2logsidmessageresponse200applicationjsonresponsebody4toolcalls.md)[]                       | :heavy_check_mark:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |