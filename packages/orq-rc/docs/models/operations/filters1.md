# Filters1

## Example Usage

```typescript
import { Filters1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Filters1 = {
  operator: "is_not_empty",
  type: "date",
  options: [
    1494.48,
  ],
  name: "<value>",
  path: "/usr/share",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `operator`                                                               | [operations.FiltersOperator](../../models/operations/filtersoperator.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `value`                                                                  | *any*                                                                    | :heavy_minus_sign:                                                       | N/A                                                                      |
| `type`                                                                   | [operations.FiltersType](../../models/operations/filterstype.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `options`                                                                | *operations.Options*[]                                                   | :heavy_check_mark:                                                       | N/A                                                                      |
| `optionsMap`                                                             | Record<string, *operations.OptionsMap*>                                  | :heavy_minus_sign:                                                       | N/A                                                                      |
| `imageUrlMap`                                                            | Record<string, *string*>                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `path`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `hideOperators`                                                          | *operations.HideOperators*[]                                             | :heavy_minus_sign:                                                       | N/A                                                                      |