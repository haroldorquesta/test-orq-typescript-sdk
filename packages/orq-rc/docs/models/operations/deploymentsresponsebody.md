# DeploymentsResponseBody

List of deployments

## Example Usage

```typescript
import { DeploymentsResponseBody } from "orq-poc-typescript-multi-env-version/models/operations";

let value: DeploymentsResponseBody = {
  object: "list",
  data: [
    {
      id: "eb14795d-596f-43bc-9b11-e9be37f6778d",
      created: "<value>",
      updated: "<value>",
      key: "<key>",
      description: "yippee even self-reliant even once",
      promptConfig: {
        tools: [
          {
            type: "function",
            function: {
              name: "<value>",
              parameters: {
                type: "object",
                properties: {
                  "key": "<value>",
                },
              },
            },
          },
        ],
        model: "Fiesta",
        modelType: "completion",
        modelParameters: {},
        provider: "azure",
        messages: [
          {
            role: "correction",
            content: "<value>",
          },
        ],
      },
      version: "<value>",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `object`                                                 | [operations.ObjectT](../../models/operations/objectt.md) | :heavy_check_mark:                                       | N/A                                                      |
| `data`                                                   | [operations.Data](../../models/operations/data.md)[]     | :heavy_check_mark:                                       | N/A                                                      |
| `hasMore`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |