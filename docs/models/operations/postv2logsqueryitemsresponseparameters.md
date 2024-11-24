# PostV2LogsQueryItemsResponseParameters

The parameters the functions accepts, described as a JSON Schema object. 

 Omitting `parameters` defines a function with an empty parameter list.

## Example Usage

```typescript
import { PostV2LogsQueryItemsResponseParameters } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryItemsResponseParameters = {
  type: "object",
  properties: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                            | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                           | [operations.PostV2LogsQueryItemsResponse200ApplicationJSONResponseBody4DataType](../../models/operations/postv2logsqueryitemsresponse200applicationjsonresponsebody4datatype.md) | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `properties`                                                                                                                                                                     | Record<string, *any*>                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `required`                                                                                                                                                                       | *string*[]                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                               | N/A                                                                                                                                                                              |
| `additionalProperties`                                                                                                                                                           | *boolean*                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                               | N/A                                                                                                                                                                              |