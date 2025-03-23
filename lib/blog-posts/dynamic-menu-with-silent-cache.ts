import type { BlogPost } from "../blog-types"

export const post: BlogPost = {
  slug: "dynamic-menu-with-silent-cache",
  title: "The Silent Cache Pattern: Enhancing UX by Separating Data Recording from Display",
  date: "2025-03-22",
  description:
    "How I solved a UX challenge with a two-tier caching approach that updates menus silently without disrupting the user experience.",
  image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=2070&auto=format&fit=crop",
  tags: ["React", "UX", "Frontend", "LocalStorage"],
  content: `
As a frontend engineer at AppsFlyer, I recently tackled an interesting UX challenge: creating a dynamic menu that shows users their recently clicked items, but without causing disruptive changes while they're actively using the menu.

## The Challenge

Our product team wanted to implement a "recently used" section in our main navigation menu. The idea was simple: track which menu items users click on and display the most recent ones at the top for quick access.

However, we quickly identified a potential UX issue. If the menu updated immediately after a user clicked an item, it would cause the menu to reorganize while the user was still looking at it. This could lead to a frustrating experience where items would shift position right as a user was about to click something.

## The Requirements

1. Track which menu items users click on
2. Display recently used items at the top of the menu
3. Don't reorganize the menu immediately after a click (which would disrupt the user)
4. Ensure the updated menu appears when the user returns to the page

## The Solution: Silent Cache

The solution I developed was what I call a "silent cache" approach. Here's how it works:

### 1. Two-Tier Storage

I implemented two separate storage mechanisms:

\`\`\`
// Regular cache - controls what's displayed now
const displayCache = JSON.parse(localStorage.getItem('menu-display-cache') || '[]');

// Silent cache - records clicks without affecting the current display
const silentCache = JSON.parse(localStorage.getItem('menu-silent-cache') || '[]');
\`\`\`

### 2. Click Handling

When a user clicks a menu item, we update only the silent cache:

\`\`\`
function handleMenuItemClick(itemId) {
// Get current silent cache
const silentCache = JSON.parse(localStorage.getItem('menu-silent-cache') || '[]');

// Remove the item if it already exists (to avoid duplicates)
const filteredCache = silentCache.filter(id => id !== itemId);

// Add the item to the beginning of the array (most recent)
const updatedCache = [itemId, ...filteredCache].slice(0, 5); // Keep only 5 most recent

// Save back to localStorage
localStorage.setItem('menu-silent-cache', JSON.stringify(updatedCache));

// Navigate to the selected item
navigate(\`/app/\${itemId}\`);
}
\`\`\`

### 3. Page Load Synchronization

The magic happens when the page loads. At this point, we synchronize the display cache with the silent cache:

\`\`\`
useEffect(() => {
// On initial page load, sync the display cache with the silent cache
const silentCache = JSON.parse(localStorage.getItem('menu-silent-cache') || '[]');
localStorage.setItem('menu-display-cache', JSON.stringify(silentCache));

// Now use the display cache to render the menu
setRecentItems(silentCache);
}, []);
\`\`\`

## The Result

This solution successfully addressed all our requirements:

✅ We track user clicks in the silent cache

✅ We display recently used items based on the display cache

✅ The menu doesn't reorganize during the current session

✅ The updated menu appears when the user returns to the page

The product team was thrilled with the implementation, as it provided the functionality they wanted without compromising the user experience. Users get the benefit of quick access to their frequently used items without the confusion of a constantly reorganizing menu.

## Key Takeaways

This project reinforced some important principles for me:

1. **Think beyond the immediate interaction** - Consider how changes affect the entire user experience
2. **Use local storage strategically** - It's not just for persistence, but can be used for UX improvements
3. **Separate recording from displaying** - This pattern can be useful in many contexts
4. **Sync at natural boundaries** - Page loads are natural points to update the UI without disrupting users

The next time you're building a feature that tracks user behavior to improve the experience, consider whether a "silent cache" approach might help you avoid disrupting the user's flow while still providing the benefits of personalization.
`,
}

