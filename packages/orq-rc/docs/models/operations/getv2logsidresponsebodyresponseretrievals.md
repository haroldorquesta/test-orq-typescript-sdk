# GetV2LogsIdResponseBodyResponseRetrievals

## Example Usage

```typescript
import { GetV2LogsIdResponseBodyResponseRetrievals } from "orq-poc-typescript-multi-env-version/models/operations";

let value: GetV2LogsIdResponseBodyResponseRetrievals = {
  knowledgeId: "<id>",
  documents: [
    {
      id: "57be5e2e-c54c-45ba-994a-80e7e0cf5905",
      text: "<value>",
      metadata: {
        datasourceId: "<id>",
        chunkId: "<id>",
        fileName: "example.file",
        fileType: "application",
      },
      score: 3360.03,
    },
  ],
  knowledgeKey: "<value>",
  query: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `knowledgeId`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Unique id of the knowledge base                                                                              |
| `documents`                                                                                                  | [operations.GetV2LogsIdResponseBodyDocuments](../../models/operations/getv2logsidresponsebodydocuments.md)[] | :heavy_check_mark:                                                                                           | The documents returned                                                                                       |
| `knowledgeKey`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The key of the knowledge base                                                                                |
| `query`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The query used to search the knowledge base                                                                  |