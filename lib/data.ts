import type { BlogPost } from "./blog-types"
import { post as dynamicMenuPost } from "./blog-posts/dynamic-menu-with-silent-cache"

export const blogPosts: BlogPost[] = [dynamicMenuPost]

