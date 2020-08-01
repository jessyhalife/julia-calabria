async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

async function getSomeProjects() {
  const data = await fetchAPI(
    `{
        projects(orderBy: createdAt_DESC, first: 6){
          id
          title
          link
          image {
            url
          }
          description
          date
        }
          
    }`,
    {}
  );

  return data.projects;
}

async function getAllProjects() {
  const data = await fetchAPI(`
    {
      projects(orderBy: createdAt_DESC){
      id
      title
      link
      description
      image {
        url
      }
      date
    }
  }`);
  return data.projects;
}

export { getSomeProjects, getAllProjects };
