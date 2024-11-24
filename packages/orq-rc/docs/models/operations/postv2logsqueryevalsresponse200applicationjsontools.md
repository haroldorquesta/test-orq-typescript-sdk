# PostV2LogsQueryEvalsResponse200ApplicationJSONTools

## Example Usage

```typescript
import { PostV2LogsQueryEvalsResponse200ApplicationJSONTools } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryEvalsResponse200ApplicationJSONTools = {
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

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                               | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONResponseBodyItems17Type](../../models/operations/postv2logsqueryevalsresponse200applicationjsonresponsebodyitems17type.md) | :heavy_check_mark:                                                                                                                                                                   | The type of the tool. Currently, only `function` is supported.                                                                                                                       |
| `function`                                                                                                                                                                           | [operations.PostV2LogsQueryEvalsResponse200ApplicationJSONFunction](../../models/operations/postv2logsqueryevalsresponse200applicationjsonfunction.md)                               | :heavy_check_mark:                                                                                                                                                                   | N/A                                                                                                                                                                                  |