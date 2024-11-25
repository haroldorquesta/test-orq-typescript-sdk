# Filters2

## Example Usage

```typescript
import { Filters2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Filters2 = {
  operator: "is_empty",
  value: [
    "<value>",
  ],
  type: "single-value-array",
  options: [
    4287.69,
  ],
  name: "<value>",
  path: "/etc/namedb",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `operator`                                                                                             | [operations.PostV2LogsQueryFiltersOperator](../../models/operations/postv2logsqueryfiltersoperator.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `value`                                                                                                | *any*[]                                                                                                | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [operations.PostV2LogsQueryFiltersType](../../models/operations/postv2logsqueryfilterstype.md)         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `options`                                                                                              | *operations.FiltersOptions*[]                                                                          | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `optionsMap`                                                                                           | Record<string, *operations.FiltersOptionsMap*>                                                         | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `imageUrlMap`                                                                                          | Record<string, *string*>                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `path`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `hideOperators`                                                                                        | *operations.FiltersHideOperators*[]                                                                    | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |