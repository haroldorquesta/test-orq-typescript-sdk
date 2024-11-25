# Data

## Example Usage

```typescript
import { Data } from "orq-poc-typescript-multi-env-version/models/operations";

let value: Data = {
  id: "e5455700-6499-413a-ae06-c5b32b30abc0",
  created: "<value>",
  updated: "<value>",
  key: "<key>",
  description:
    "victoriously ouch although fortunate short oh volleyball intent",
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
    model: "Charger",
    modelType: "vision",
    modelParameters: {},
    provider: "groq",
    messages: [
      {
        role: "exception",
        content: "<value>",
      },
    ],
  },
  version: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier for the object.                                                 |
| `created`                                                                         | *string*                                                                          | :heavy_check_mark:                                                                | Date in ISO 8601 format at which the object was created.                          |
| `updated`                                                                         | *string*                                                                          | :heavy_check_mark:                                                                | Date in ISO 8601 format at which the object was last updated.                     |
| `key`                                                                             | *string*                                                                          | :heavy_check_mark:                                                                | The deployment unique key                                                         |
| `description`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | An arbitrary string attached to the object. Often useful for displaying to users. |
| `promptConfig`                                                                    | [operations.PromptConfig](../../models/operations/promptconfig.md)                | :heavy_check_mark:                                                                | N/A                                                                               |
| `version`                                                                         | *string*                                                                          | :heavy_check_mark:                                                                | THe version of the deployment                                                     |