# GetV2LogsIdEvalsResponse200Tools

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponse200Tools } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponse200Tools = {
  type: "function",
  function: {
    name: "<value>",
    parameters: {
      type: "object",
      properties: {
        "key": "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody47WorkflowRunType](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody47workflowruntype.md) | :heavy_check_mark:                                                                                                                                                                       | The type of the tool. Currently, only `function` is supported.                                                                                                                           |
| `function`                                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponse200Function](../../models/operations/getv2logsidevalsresponse200function.md)                                                                         | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |