# EvalsTools

## Example Usage

```typescript
import { EvalsTools } from "orq-poc-typescript-multi-env-version/models/operations";

let value: EvalsTools = {
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

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                             | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody17Type](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody17type.md) | :heavy_check_mark:                                                                                                                                                 | The type of the tool. Currently, only `function` is supported.                                                                                                     |
| `function`                                                                                                                                                         | [operations.EvalsFunction](../../models/operations/evalsfunction.md)                                                                                               | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |