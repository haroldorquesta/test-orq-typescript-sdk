<!-- Start SDK Example Usage [usage] -->
```typescript
import { Orq } from "orq-poc-typescript-multi-env-version";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.contacts.create({
    externalId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->