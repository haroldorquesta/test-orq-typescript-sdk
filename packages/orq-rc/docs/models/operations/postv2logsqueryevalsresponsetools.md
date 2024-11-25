# PostV2LogsQueryEvalsResponseTools

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponseTools } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponseTools = {
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
| `type`                                                                                                                                                                                                     | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems37WorkflowRunType](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems37workflowruntype.md) | :heavy_check_mark:                                                                                                                                                                                         | The type of the tool. Currently, only `function` is supported.                                                                                                                                             |
| `function`                                                                                                                                                                                                 | [operations.PostV2LogsQueryEvalsResponseFunction](../../models/operations/postv2logsqueryevalsresponsefunction.md)                                                                                         | :heavy_check_mark:                                                                                                                                                                                         | N/A                                                                                                                                                                                                        |