# accordion-02-07-2026
A simple JavaScript Accordion component built with Vanilla JS using dynamic DOM creation and state management. Only one panel can be open at a time.

# Accordion Component

A simple Accordion component built with **HTML, CSS, and Vanilla JavaScript**.

The entire interface is generated dynamically with JavaScript from an array of objects. Only one panel can be opened at a time, providing a clean and user-friendly experience.

---

## Features

- Dynamic DOM creation
- Data-driven UI
- One panel open at a time
- Toggle open/close behavior
- Simple state management
- Clean and reusable component structure
- Pure Vanilla JavaScript (no libraries)

---

## Technologies

- HTML5
- CSS3
- JavaScript (ES6)

---

## How it works

The accordion receives an array of objects containing:

- `id`
- `titleText`
- `detailText`

Example:

```javascript
[
  {
    id: 1,
    titleText: "First Panel",
    detailText: "The first panel is open."
  },
  ...
]
```

JavaScript creates all DOM elements dynamically and manages which panel is currently open using an internal state (`activeId`).

When a panel is opened:

- its content becomes visible;
- the icon changes from **+** to **−**;
- all other panels automatically close.

---

## What I practiced

- DOM manipulation
- Event listeners
- Arrays and objects
- State management
- Dynamic UI rendering
- Component-like architecture in Vanilla JavaScript
- CSS class toggling

---

## Live Demo

.

## Project Goal

This project was created to practice building reusable UI components with Vanilla JavaScript while preparing for modern frontend frameworks such as React.

---


## Author

Created by **Nomena**
