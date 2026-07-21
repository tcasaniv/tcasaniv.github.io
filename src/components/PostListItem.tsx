type PostData = {
  id: string;
  data: {
    title: string;
    description: string;
    pubDate: Date;
    authors: string[];
    categories: string[];
  };
};

export const PostListItem = ({ post }: { post: PostData }) => {
  const { data, id } = post;
  const { title, description, pubDate, authors, categories } = data;
  const categoriesList = categories.length > 0 ? categories.join(", ") : "sin categoría";
  return (
    <div class="post flex flex-col">
      <h2 class="mb-0.5 mt-0 text-xl">
        <a
          class="text-link no-underline hover:underline"
          href={`/blog/${id}/`}
        >
          {title}
        </a>
      </h2>
      <p class="mb-2 text-sm">{description}</p>
      <div class="info sm:dot-separated flex flex-col flex-wrap gap-1 text-xs text-gray-600 opacity-80 dark:text-white/50 dark:opacity-95 sm:flex-row sm:items-center sm:gap-0">
        <p class="m-0">Escrito por {authors.join(" & ")}</p>
        <span class="flex">
          <div class="sm:sr-only">Fecha:&nbsp;</div>
          <time class="inline" datetime={pubDate.toISOString()}>
            {pubDate.toLocaleDateString("es-419", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        </span>
        <p class="m-0">Categorías: {categoriesList}</p>
      </div>
    </div>
  );
};
