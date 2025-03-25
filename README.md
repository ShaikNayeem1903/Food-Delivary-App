

## 🍔Food Delivery App
#### A modern food ordering application built with React, Redux, and TailwindCSS.

##### 🚀 Live Demo
[fooddelivaryapp.netlify.app](url)

###### 📌 Features
✅ Browse food categories & menu items </br>
✅ Add/remove items from the cart </br>
✅ Manage quantity using Redux </br>
✅ Calculate subtotal, tax, and total price dynamically </br>
✅ Responsive UI with TailwindCSS </br>
✅ Toast notifications for user actions </br>

###### 🛠 Tech Stack
###### Frontend: React, TailwindCSS

###### State Management: Redux Toolkit, Context API

###### Notifications: React Toastify

###### Icons: React Icons

📂 Folder Structure

Food-Delivary-App/
│── src/ </br>
│   ├── components/   # UI Components (Navbar, Cards, etc.) </br>
│   ├── pages/        # Main pages (Home, Cart, etc.) </br>
│   ├── context/      # Context API files </br>
│   ├── redux/        # Redux Store & Slices </br>
│   ├── assets/       # Images & static files </br>
│   ├── App.js        # Root component </br>
│   ├── index.js      # Entry point </br>
│── public/ </br>
│── package.json </br>
│── README.md </br>
📥 Installation & Setup </br>
1️⃣ Clone the Repo
git clone https://github.com/ShaikNayeem1903/Food-Delivary-App.git </br>
cd Food-Delivary-App </br>
2️⃣ Install Dependencies
npm install </br>
3️⃣ Start the Development Server
npm run dev </br>
Your app will be running at http://localhost:5173 🚀 </br>

#### 🔍 How the App Works </br>
##### 🛒 Cart Management with Redux </br>
##### Redux stores cart items, quantity, subtotal, and total price. </br>

###### cartSlice.js contains actions like:

###### addToCart()

###### remove()

###### incrementQnt()

###### decrementQnt()

useSelector retrieves cart data from Redux.

useDispatch triggers actions like addToCart().

🌍 Global State with Context API
Context API is used to manage global app state outside Redux.

Context.jsx provides shared state values and functions.

❓ Q&A: How This Project Works
Q1: How is state managed in this app?
Cart state → Redux Toolkit (cartSlice.js)

Global app state → Context API (Context.jsx)

Q2: How does the cart system work?
Clicking "Add to Cart" dispatches addToCart(item) action.

Redux updates cart state.

Toast notification confirms the addition.

The cart dynamically updates the subtotal, tax, and total.

Q3: How does the UI remain responsive?
TailwindCSS classes like flex, grid, w-full, h-auto.

Responsive breakpoints: sm:, md:, lg:, xl:.

Q4: How does quantity update work?
incrementQnt(id) and decrementQnt(id) update Redux state.

Cart dynamically re-renders with the new quantity and price.

Q5: What happens when I remove an item from the cart?
remove(id) action is dispatched.

Redux filters out the item.

Cart updates, and a toast appears confirming removal.



Commit changes & push (git push origin feature-newFeature)

Open a Pull Request

📜 License
This project is licensed under the MIT License.
