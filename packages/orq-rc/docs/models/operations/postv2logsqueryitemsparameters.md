# PostV2LogsQueryItemsParameters

The parameters the functions accepts, described as a JSON Schema object. 

 Omitting `parameters` defines a function with an empty parameter list.

## Example Usage

```typescript
import { PostV2LogsQueryItemsParameters } from "orq-poc-typescript-multi-env-version/models/operations";

let value: PostV2LogsQueryItemsParameters = {
  type: "object",
  properties: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                 | [operations.PostV2LogsQueryItemsResponse200ApplicationJSONResponseBodyType](../../models/operations/postv2logsqueryitemsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `properties`                                                                                                                                                           | Record<string, *any*>                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `required`                                                                                                                                                             | *string*[]                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `additionalProperties`                                                                                                                                                 | *boolean*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                     | N/A                                                                                                                                                                    |