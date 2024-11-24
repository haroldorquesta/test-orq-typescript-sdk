# PostV2LogsQueryEvalsResponse200Tools

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse200Tools } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse200Tools = {
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

| Field                                                                                                                                                                                                      | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                     | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems47WorkflowRunType](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems47workflowruntype.md) | :heavy_check_mark:                                                                                                                                                                                         | The type of the tool. Currently, only `function` is supported.                                                                                                                                             |
| `function`                                                                                                                                                                                                 | [operations.PostV2LogsQueryEvalsResponse200Function](../../models/operations/postv2logsqueryevalsresponse200function.md)                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | N/A                                                                                                                                                                                                        |