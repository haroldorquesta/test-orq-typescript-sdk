# EvalsValue

## Example Usage

```typescript
import { EvalsValue } from "orq-poc-typescript-multi-env-version/models/operations";

let value: EvalsValue = {
  rouge1: {
    f1: 7665.48,
    precision: 9120.06,
    recall: 7258.09,
  },
  rouge2: {
    f1: 1779.78,
    precision: 902.94,
    recall: 508.79,
  },
  rougeL: {
    f1: 2604.58,
    precision: 3371.13,
    recall: 3507.13,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `rouge1`                                               | [operations.Rouge1](../../models/operations/rouge1.md) | :heavy_check_mark:                                     | N/A                                                    |
| `rouge2`                                               | [operations.Rouge2](../../models/operations/rouge2.md) | :heavy_check_mark:                                     | N/A                                                    |
| `rougeL`                                               | [operations.RougeL](../../models/operations/rougel.md) | :heavy_check_mark:                                     | N/A                                                    |