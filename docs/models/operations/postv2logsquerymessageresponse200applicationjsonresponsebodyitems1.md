# PostV2LogsQueryMessageResponse200ApplicationJSONResponseBodyItems1

## Example Usage

```typescript
import { PostV2LogsQueryMessageResponse200ApplicationJSONResponseBodyItems1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryMessageResponse200ApplicationJSONResponseBodyItems1 =
  {
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

| Field                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `role`                                                                                                                                                                                                                   | [operations.PostV2LogsQueryMessageResponse200ApplicationJSONResponseBodyItems4Evals7WorkflowRunRole](../../models/operations/postv2logsquerymessageresponse200applicationjsonresponsebodyitems4evals7workflowrunrole.md) | :heavy_check_mark:                                                                                                                                                                                                       | The role of the prompt message                                                                                                                                                                                           |
| `content`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      |
| `toolCalls`                                                                                                                                                                                                              | [operations.PostV2LogsQueryMessageResponse200ApplicationJSONResponseBodyItemsToolCalls](../../models/operations/postv2logsquerymessageresponse200applicationjsonresponsebodyitemstoolcalls.md)[]                         | :heavy_check_mark:                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                      |