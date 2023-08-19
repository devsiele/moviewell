import { g, auth, config } from "@grafbase/sdk";

const User = g.model("User", {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  movies: g
    .relation(() => Movie)
    .list()
    .optional(),
});

const Movie = g.model("Movie", {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  movieUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
});

export default config({
  schema: g,
});
