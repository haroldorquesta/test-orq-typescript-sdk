# GetV2LogsIdEvalsResponseValue

## Example Usage

```typescript
import { GetV2LogsIdEvalsResponseValue } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdEvalsResponseValue = {
  rouge1: {
    f1: 4663.19,
    precision: 6257.60,
    recall: 6643.29,
  },
  rouge2: {
    f1: 5575.58,
    precision: 3975.59,
    recall: 4888.65,
  },
  rougeL: {
    f1: 3176.03,
    precision: 5839.71,
    recall: 2192.73,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `rouge1`                                                         | [operations.EvalsRouge1](../../models/operations/evalsrouge1.md) | :heavy_check_mark:                                               | N/A                                                              |
| `rouge2`                                                         | [operations.EvalsRouge2](../../models/operations/evalsrouge2.md) | :heavy_check_mark:                                               | N/A                                                              |
| `rougeL`                                                         | [operations.EvalsRougeL](../../models/operations/evalsrougel.md) | :heavy_check_mark:                                               | N/A                                                              |