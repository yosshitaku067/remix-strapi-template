import { StrapiClient } from "./__generated__";

export const strapiClient = new StrapiClient({
	BASE: "http://localhost:1337/api",
	TOKEN: process.env.STRAPI_READ_ONLY_TOKEN || "",
});
