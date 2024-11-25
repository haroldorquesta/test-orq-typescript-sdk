# EvalsParameters

The parameters the functions accepts, described as a JSON Schema object. 

 Omitting `parameters` defines a function with an empty parameter list.

## Example Usage

```typescript
import { EvalsParameters } from "orq-poc-typescript-multi-env-version/models/operations";

let value: EvalsParameters = {
  type: "object",
  properties: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                                           | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody17WorkflowRunDataType](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody17workflowrundatatype.md) | :heavy_check_mark:                                                                                                                                                                               | N/A                                                                                                                                                                                              |
| `properties`                                                                                                                                                                                     | Record<string, *any*>                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                               | N/A                                                                                                                                                                                              |
| `required`                                                                                                                                                                                       | *string*[]                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                               | N/A                                                                                                                                                                                              |
| `additionalProperties`                                                                                                                                                                           | *boolean*                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                               | N/A                                                                                                                                                                                              |