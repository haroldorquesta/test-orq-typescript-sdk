# Retrievals

## Example Usage

```typescript
import { Retrievals } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Retrievals = {
  document: "<value>",
  metadata: {
    fileName: "example.file",
    pageNumber: 5438.06,
    fileType: "image",
    searchScore: 8820.41,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `document`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | Content of the retrieved chunk from the knowledge base                                     |
| `metadata`                                                                                 | [operations.DeploymentInvokeMetadata](../../models/operations/deploymentinvokemetadata.md) | :heavy_check_mark:                                                                         | Metadata of the retrieved chunk from the knowledge base                                    |