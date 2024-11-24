# Data1

## Example Usage

```typescript
import { Data1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Data1 = {
  id: "<id>",
  displayName: "Shannon.Hoeger74",
  description: "print known instead improbable",
  prompt: "<value>",
  outputType: "string",
  type: "llm_eval",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `displayName`                                                  | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `description`                                                  | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `enabled`                                                      | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `prompt`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `outputType`                                                   | [operations.OutputType](../../models/operations/outputtype.md) | :heavy_check_mark:                                             | N/A                                                            |
| `type`                                                         | [operations.DataType](../../models/operations/datatype.md)     | :heavy_check_mark:                                             | N/A                                                            |