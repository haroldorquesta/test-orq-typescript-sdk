# Retries

## Example Usage

```typescript
import { Retries } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Retries = {
  retryAttempt: 9804.26,
  status: 3203.65,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `retryAttempt`     | *number*           | :heavy_check_mark: | N/A                |
| `status`           | *number*           | :heavy_check_mark: | N/A                |
| `message`          | *string*           | :heavy_minus_sign: | N/A                |
| `isFallback`       | *boolean*          | :heavy_minus_sign: | N/A                |