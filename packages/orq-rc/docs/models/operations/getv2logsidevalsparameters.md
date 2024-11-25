# GetV2LogsIdEvalsParameters

The parameters the functions accepts, described as a JSON Schema object. 

 Omitting `parameters` defines a function with an empty parameter list.

## Example Usage

```typescript
import { GetV2LogsIdEvalsParameters } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsParameters = {
  type: "object",
  properties: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                                      | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                     | [operations.GetV2LogsIdEvalsResponse200ApplicationJSONResponseBody27WorkflowRunDataToolsType](../../models/operations/getv2logsidevalsresponse200applicationjsonresponsebody27workflowrundatatoolstype.md) | :heavy_check_mark:                                                                                                                                                                                         | N/A                                                                                                                                                                                                        |
| `properties`                                                                                                                                                                                               | Record<string, *any*>                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                         | N/A                                                                                                                                                                                                        |
| `required`                                                                                                                                                                                                 | *string*[]                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                         | N/A                                                                                                                                                                                                        |
| `additionalProperties`                                                                                                                                                                                     | *boolean*                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                         | N/A                                                                                                                                                                                                        |