# Data2

## Example Usage

```typescript
import { Data2 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Data2 = {
  id: "<id>",
  displayName: "Jacinto_Feest3",
  description: "whoa once hence except thoroughly boo",
  function: "regex",
  outputType: "boolean",
  type: "function_eval",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `displayName`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `description`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `enabled`                                                                                                                    | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `function`                                                                                                                   | [operations.DataFunction](../../models/operations/datafunction.md)                                                           | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `outputType`                                                                                                                 | [operations.DataOutputType](../../models/operations/dataoutputtype.md)                                                       | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `metadata`                                                                                                                   | [operations.DataMetadata](../../models/operations/datametadata.md)                                                           | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `type`                                                                                                                       | [operations.GetV2ResourcesEvaluatorsTemplatesDataType](../../models/operations/getv2resourcesevaluatorstemplatesdatatype.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |