# DeploymentInvokeRetrievals

## Example Usage

```typescript
import { DeploymentInvokeRetrievals } from "orq-poc-typescript-multi-env-version/models/operations";

let value: DeploymentInvokeRetrievals = {
  document: "<value>",
  metadata: {
    fileName: "example.file",
    pageNumber: 2594.23,
    fileType: "audio",
    searchScore: 5876.00,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `document`                                                                                                       | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Content of the retrieved chunk from the knowledge base                                                           |
| `metadata`                                                                                                       | [operations.DeploymentInvokeDeploymentsMetadata](../../models/operations/deploymentinvokedeploymentsmetadata.md) | :heavy_check_mark:                                                                                               | Metadata of the retrieved chunk from the knowledge base                                                          |