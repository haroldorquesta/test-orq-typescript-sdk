# GetV2LogsIdEvalsTools

## Example Usage

```typescript
import { GetV2LogsIdEvalsTools } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsTools = {
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
| `type`                                                                                                                                                                                   | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody27WorkflowRunType](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody27workflowruntype.md) | :heavy_check_mark:                                                                                                                                                                       | The type of the tool. Currently, only `function` is supported.                                                                                                                           |
| `function`                                                                                                                                                                               | [operations.GetV2LogsIdEvalsFunction](../../models/operations/getv2logsidevalsfunction.md)                                                                                               | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |