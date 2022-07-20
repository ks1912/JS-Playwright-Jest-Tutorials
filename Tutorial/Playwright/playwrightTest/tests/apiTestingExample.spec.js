const { test, expect } = require("@playwright/test");
const { environment } = require("../config");

test("can POST a REST API and check response using assertion style (using page)", async ({
  page,
}) => {
  await page.goto("https://www.github.com");
  const response = await page.request.post(
    `${environment.githubAPILink}webdriverjsdemo/webdriverjsdemo.github.io/posts`,
    { data: { title: "Post 4" } }
  );
  expect(response.status()).toBe(201);
  const body = JSON.parse(await response.text());
  expect(body.id).toBe(4);
  expect(body.title).toBe("Post 4");
  console.log(JSON.stringify(body));
});
