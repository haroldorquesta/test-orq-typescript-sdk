# DeploymentInvokeRetrievals

## Example Usage

```typescript
import { DeploymentInvokeRetrievals } from "orq-poc-typescript-multi-env-version/models/operations";

let value: DeploymentInvokeRetrievals = {
  document: "<value>",
  metadata: {
    fileName: "example.file",
    pageNumber: 8221.18,
    fileType: "video",
    searchScore: 5113.19,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `document`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | Content of the retrieved chunk from the knowledge base                                     |
| `metadata`                                                                                 | [operations.DeploymentInvokeMetadata](../../models/operations/deploymentinvokemetadata.md) | :heavy_check_mark:                                                                         | Metadata of the retrieved chunk from the knowledge base                                    |