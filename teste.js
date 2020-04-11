const { id } = request.params;
const { title, url, techs } = request.body;

const repositoryIndex = repositories.findIndex(
  (repository) => repository.id === id
);

if (repositoryIndex < 0) {
  return response.status(400).json({ error: "Repository not found!" });
}

const repository = {
  id,
  title,
  url,
  techs,
};

repositories[repositoryIndex] = repository;

return response.json(repository);
