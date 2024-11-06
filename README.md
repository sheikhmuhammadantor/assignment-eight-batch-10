# GadgetHaven ✨

- ## Live Website Link: [Netlify](https://gadget-heaven-123.netlify.app/);

- ## Live Website Link: [Surge](https://gadget-heaven-123.surge.sh/);

- ## Requirement Document [Link](https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf);

# Used Both of Data management system :
## 1. **contextAPI**
## 2. **local storage**

<br/>
<br/>


# Key Features :

## 1. **Structured Navigation Bar**
   - A responsive navigation bar that provides access to Home, Dashboard, Most Popular, Statistics, Cart, Wishlist pages.
   - Ensures smooth navigation across the website.

## 2. **Product Categories**
   - Users can browse products by categories (e.g. Mobiles, Laptops, Headsets, Speakers, Tablets etc.).
   - Filters for price range, enhance user experience and help customers find products faster.

## 3. **Individual Product Details Pages**
   - Detailed pages for each product with information such as specifications, reviews, and pricing.
   - "Add to Cart" and "Add to Wishlist" options are displayed on each product page.

## 4. **Shopping Cart System**
   - A shopping cart feature that allows users to add, view, update, and remove items.
   - Cart details are persisted using Context API and optionally synced with localStorage for data persistence across sessions.

## 5. **Wishlist Functionality**
   - Users can save items to a wishlist for easy access later.
   - The wishlist is managed by the Context API and can be viewed, updated, or cleared at any time.


<br/>
<br/>
<br/>


# React Fundamental concepts :

## 1. **Components**
   - **Function Components**: Used to create reusable UI Components, such as `Navbar`, `ProductDetails`, and `Cart`.
   - **Component Composition**: Building complex UIs by combining smaller components.

## 2. **JSX (JavaScript XML)**
   - Syntax for combining HTML with JavaScript within components for rendering elements.
   - Used to create and structure page layouts within React components.

## 3. **Props (Properties)**
   - Passing data between components, such as sending product details from `ProductList` to individual `ProductCard` components.

## 4. **State Management**
   - **useState**: Managing dynamic data within components, like toggle states for the wishlist and cart actions.
   - State is also used to handle user interactions, such as button clicks for "Add to Cart" or "Add to Wishlist."

## 5. **Lifecycle Methods (via Hooks)**
   - **useEffect**: Handling side effects, such as fetching data from an API, and re-running code when dependencies change.

## 6. **Context API**
   - Provides global access to cart and wishlist functions, enhancing scalability and ease of state management.

## 7. **Conditional Rendering**
   - Rendering elements based on certain conditions, such as showing a "Sold Out" label if a product is unavailable.

## 8. **Lists and Keys**
   - Mapping through arrays of product data to render lists of items with unique keys, such as displaying product categories or wishlist items.

## 9. **Event Handling**
   - Handling user interactions like clicks, and filtering etc.

## 10. **React Router**
   - Navigating between pages within the app, such as moving from the homepage to the product details page or the cart.
   - Using `useNavigate` and `<Link>` for smooth routing.
