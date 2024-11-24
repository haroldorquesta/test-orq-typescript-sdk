# Six

## Example Usage

```typescript
import { Six } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Six = {
  operator: "does_not_contain",
  type: "boolean",
  options: [
    {
      name: "<value>",
      path: "/etc/defaults",
      type: "multi-value-array",
      id: "<id>",
    },
  ],
  selectedOptionId: "<id>",
  name: "<value>",
  path: "/etc/periodic",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `operator`                                                                                                                                     | *operations.PostV2LogsQueryFiltersRequestRequestBodyQuery6Operator*                                                                            | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `value`                                                                                                                                        | *any*                                                                                                                                          | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |
| `type`                                                                                                                                         | [operations.PostV2LogsQueryFiltersRequestRequestBodyQuery6Type](../../models/operations/postv2logsqueryfiltersrequestrequestbodyquery6type.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `options`                                                                                                                                      | [operations.PostV2LogsQueryFiltersOptions](../../models/operations/postv2logsqueryfiltersoptions.md)[]                                         | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `selectedOptionId`                                                                                                                             | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `name`                                                                                                                                         | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `path`                                                                                                                                         | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `hideOperators`                                                                                                                                | *operations.PostV2LogsQueryFiltersRequestRequestBodyQuery6HideOperators*[]                                                                     | :heavy_minus_sign:                                                                                                                             | N/A                                                                                                                                            |