# ItemsProcessingAttempts

## Example Usage

```typescript
import { ItemsProcessingAttempts } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ItemsProcessingAttempts = {
  id: "<id>",
  startedAt: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `startedAt`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `queuedAt`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `completedAt`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `errors`                                                           | [operations.ItemsErrors](../../models/operations/itemserrors.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |