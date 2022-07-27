import Client from "index";

describe("Gender", () => {
  test("Default gender", () => {
    const client = new Client();
    expect(client.gender).toBe("random");
  });

  test("Set gender upon initialization", () => {
    const client = new Client(undefined, "female");
    expect(client.gender).toBe("female");
  });

  test("Change gender of existing client", async () => {
    const client = new Client();
    expect(client.gender).toBe("random");
    client.setGender("female");
    expect(client.gender).toBe("female");
  });
});

describe("Language", () => {
  test("Default language", () => {
    const client = new Client();
    expect(client.language).toBe("random");
  });

  test("Set language upon initialization", () => {
    const client = new Client("czech-czech-republic", undefined);
    expect(client.language).toBe("czech-czech-republic");
  });

  test("Change language of existing client", async () => {
    const client = new Client();
    expect(client.language).toBe("random");
    client.setLanguage("czech-czech-republic");
    expect(client.language).toBe("czech-czech-republic");
  });
});

describe("Profile Generation", () => {
  test("Generate profile", async () => {
    const client = new Client();
    const profile = await client.generate();
    const properties = [
      "name",
      "address",
      "latitude",
      "longitude",
      "maiden_name",
      "birth_data",
      "phone_h",
      "phone_w",
      "email_u",
      "email_d",
      "username",
      "password",
      "domain",
      "useragent",
      "ipv4",
      "macaddress",
      "plasticcard",
      "cardexpir",
      "bonus",
      "company",
      "color",
      "uuid",
      "height",
      "weight",
      "blood",
      "eye",
      "hair",
      "pict",
      "url",
      "sport",
      "ipv4_url",
      "email_url",
      "domain_url",
    ];

    properties.map((property) => expect(profile).toHaveProperty(property));
  });
});
