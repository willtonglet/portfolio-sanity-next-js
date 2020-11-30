// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import pages from "./pages";
import social from "./social";
import cover from "./cover";
import portfolio from "./portfolio";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([pages, cover, portfolio, social]),
});
