# ResponseFormat1

## Example Usage

```typescript
import { ResponseFormat1 } from "orq-poc-typescript-multi-env-version/models/operations";

let value: ResponseFormat1 = {
  type: "json_schema",
  jsonSchema: {
    name: "<value>",
    strict: false,
    schema: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [operations.ResponseFormatType](../../models/operations/responseformattype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `jsonSchema`                                                                   | [operations.JsonSchema](../../models/operations/jsonschema.md)                 | :heavy_check_mark:                                                             | N/A                                                                            |