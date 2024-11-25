# DeploymentInvokeRetrievals

## Example Usage

```typescript
import { DeploymentInvokeRetrievals } from "orq-poc-typescript-multi-env-version/models/operations";

let value: DeploymentInvokeRetrievals = {
  document: "<value>",
  metadata: {
    fileName: "example.file",
    pageNumber: 5252.35,
    fileType: "application",
    searchScore: 6732.41,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `document`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | Content of the retrieved chunk from the knowledge base                                     |
| `metadata`                                                                                 | [operations.DeploymentInvokeMetadata](../../models/operations/deploymentinvokemetadata.md) | :heavy_check_mark:                                                                         | Metadata of the retrieved chunk from the knowledge base                                    |