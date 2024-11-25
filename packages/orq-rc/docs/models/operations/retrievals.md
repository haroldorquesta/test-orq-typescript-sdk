# Retrievals

## Example Usage

```typescript
import { Retrievals } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Retrievals = {
  document: "<value>",
  metadata: {
    fileName: "example.file",
    pageNumber: 1364.00,
    fileType: "image",
    searchScore: 9615.26,
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `document`                                                 | *string*                                                   | :heavy_check_mark:                                         | Content of the retrieved chunk from the knowledge base     |
| `metadata`                                                 | [operations.Metadata](../../models/operations/metadata.md) | :heavy_check_mark:                                         | Metadata of the retrieved chunk from the knowledge base    |