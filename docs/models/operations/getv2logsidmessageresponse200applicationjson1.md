# GetV2LogsIdMessageResponse200ApplicationJson1

## Example Usage

```typescript
import { GetV2LogsIdMessageResponse200ApplicationJson1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdMessageResponse200ApplicationJson1 = {
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
| `role`                                                                                                                                                                                                 | [operations.GetV2LogsIdMessageResponse200ApplicationJSONResponseBody3Evals7WorkflowRunRole](../../models/operations/getv2logsidmessageresponse200applicationjsonresponsebody3evals7workflowrunrole.md) | :heavy_check_mark:                                                                                                                                                                                     | The role of the prompt message                                                                                                                                                                         |
| `content`                                                                                                                                                                                              | *string*                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |
| `toolCalls`                                                                                                                                                                                            | [operations.GetV2LogsIdMessageResponse200ApplicationJSONToolCalls](../../models/operations/getv2logsidmessageresponse200applicationjsontoolcalls.md)[]                                                 | :heavy_check_mark:                                                                                                                                                                                     | N/A                                                                                                                                                                                                    |