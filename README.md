# 🍽️ Foodie — South Indian Food Ordering App

A food ordering web app built with React and Tailwind CSS, focused entirely on authentic South Indian cuisine. Browse dishes by state, add to cart, and explore regional food culture.

**Live demo:** [foodworld-pearl.vercel.app](https://foodworld-pearl.vercel.app)

---

## 🌟 What makes this different

Most food apps are generic. Foodie is built around a single idea: **South Indian food is not one thing — it's five states, each with its own identity.**

- Filter the menu by **state** (Andhra Pradesh, Tamil Nadu, Karnataka, Kerala, Telangana)
- Filter by **Festival Specials** — dishes tied to Pongal, Bathukamma, and other regional festivals
- Every dish shows its **region of origin** and **spice level**
- Partial functional **cart** with quantity controls and live total
- Works in **light and dark mode**

---

## 🛠️ Built With

| Tool | Purpose |
|---|---|
| React 19 | UI and component logic |
| Vite | Build tool and dev server |
| Tailwind CSS | Styling |
| React Icons | Icon library |
| React Slick | Testimonial carousel |
| Context API | Global cart and toast state |
| Vercel | Deployment |

---

## 📁 Project Structure

```
src/
├── App.jsx                    # Root component, assembles all sections
├── main.jsx                   # Entry point, wraps app in CartProvider
├── index.css                  # Global styles, custom animations
├── context/
│   └── CartContext.jsx        # Global cart state (add, remove, qty, toast)
└── components/
    ├── NavBar/
    │   ├── NavBar.jsx         # Fixed navbar, mobile menu, scroll links
    │   └── DarkMode.jsx       # Dark/light mode toggle
    ├── Hero/
    │   └── Hero.jsx           # Landing section, food image switcher, search
    ├── Services/
    │   └── Services.jsx       # Menu cards, state/occasion filter tabs
    ├── Banner/
    │   └── Banner.jsx         # "Why Choose Us" section
    ├── AppStore/
    │   └── AppStore.jsx       # App download section
    ├── Testimonial/
    │   └── Testimonial.jsx    # Customer review carousel
    ├── Cart/
    │   └── CartDrawer.jsx     # Slide-in cart sidebar
    ├── Toast/
    │   └── Toast.jsx          # Add-to-cart notification
    └── Footer/
        └── Footer.jsx         # Links, social icons, credits
```

---

## 🚀 Run Locally

```bash
git clone https://github.com/go23manasa/Food.git
cd Food
npm install
npm run dev
```

---

## 🗺️ Future Plans

### Phase 1 — Make the menu richer
- Add 20+ more dishes covering all 5 states including Telangana specialties (Sarva Pindi, Jonna Rotte)

### Phase 2 — AI Food Recommender
- Add a short taste quiz (5–6 questions about what north Indian foods you like)
- Use the answers to suggest a South Indian dish you'd probably enjoy
- Target audience: people new to South Indian food who don't know where to start

### Phase 3 — Real backend
- User accounts and order history
- Real-time order tracking
- Admin panel to manage the menu

### Phase 4 — Community
- Let users upload photos of dishes they tried
- Ratings and reviews per dish
- "Dish of the week" feature tied to regional festivals and seasons
