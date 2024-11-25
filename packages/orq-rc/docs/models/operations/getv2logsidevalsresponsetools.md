# GetV2LogsIdEvalsResponseTools

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponseTools } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponseTools = {
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
| `type`                                                                                                                                                                                   | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody37WorkflowRunType](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody37workflowruntype.md) | :heavy_check_mark:                                                                                                                                                                       | The type of the tool. Currently, only `function` is supported.                                                                                                                           |
| `function`                                                                                                                                                                               | [operations.GetV2LogsIdEvalsResponseFunction](../../models/operations/getv2logsidevalsresponsefunction.md)                                                                               | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |