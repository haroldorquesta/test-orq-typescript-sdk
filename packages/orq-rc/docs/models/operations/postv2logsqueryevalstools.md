# PostV2LogsQueryEvalsTools

## Example Usage

```typescript
import { PostV2LogsQueryEvalsTools } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsTools = {
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
| `type`                                                                                                                                                                                                     | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems27WorkflowRunType](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems27workflowruntype.md) | :heavy_check_mark:                                                                                                                                                                                         | The type of the tool. Currently, only `function` is supported.                                                                                                                                             |
| `function`                                                                                                                                                                                                 | [operations.PostV2LogsQueryEvalsFunction](../../models/operations/postv2logsqueryevalsfunction.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                                                         | N/A                                                                                                                                                                                                        |