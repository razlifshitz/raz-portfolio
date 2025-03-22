import type { BlogPost } from "../blog-types"

export const post: BlogPost = {
  slug: "your-post-slug", // URL-friendly identifier for the post
  title: "Your Blog Post Title",
  date: "2024-03-22", // Use YYYY-MM-DD format
  description: "A brief description of your blog post that will appear in the listing.",
  image: "/images/blog/your-image.jpg", // Optional: path to the featured image
  tags: ["Tag1", "Tag2", "Tag3"], // Optional: categories or tags for the post
  content: `
# Your Blog Post Title

Your blog post content goes here. You can use Markdown syntax for formatting:

## Subheading

Regular paragraph text.

### Lists
- Item 1
- Item 2
- Item 3

### Code blocks

\`\`\`
// Your code here
const example = "This is a code example";
console.log(example);
\`\`\`

You can include **bold text**, *italic text*, and [links](https://example.com).
`,
}

