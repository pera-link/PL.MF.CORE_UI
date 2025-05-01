# PL.MF.CORE_UI

> Core styling microfrontend for the PeraLink MicroFrontend (PL.MF) ecosystem.

---

## 🎨 Overview

**PL.MF.CORE_UI** provides a centralized styling layer that defines and compiles shared styles and class definitions. It acts as the design backbone of the PeraLink MicroFrontend ecosystem, ensuring visual consistency and scalability across all microfrontends.

---

## ✨ Key Features

- **🎯 Centralized Styling**  
  Provides a single source of truth for styles, variables, and global class definitions used throughout the platform.

- **🧩 Design Consistency**  
  Ensures all microfrontends follow the same design language, typography, spacing, and color schemes.

- **📈 Scalable Architecture**  
  Built to be easily extended and evolved as the platform grows and design requirements change.

---

## 🚀 Usage

This package is intended to be consumed as a **dependency** in other microfrontends.

- It exports **precompiled global styles** and **utility classes**.
- Do **not** modify styles directly unless updating or extending the global design system.

## 🛠 Development Guidelines

To maintain styling integrity across projects, adhere to the following:

- ✅ Follow established **design standards and naming conventions**.
- 🚫 Do not add **UI components or application logic** — this repo is strictly for styling.
- 🔁 Ensure backward compatibility and proper **semantic versioning** when making changes.
- 📦 Use tokens/variables wherever possible to enable **theming** and **reusability**.

---

## 🤝 Contribution

We welcome contributions that improve or maintain the design system.

### You can:

- Enhance or refactor existing styles  
- Add new global utility classes following the platform’s design guidelines  
- Fix inconsistencies or bugs in the styling layer

### Please remember:

- Follow the [Contribution Guidelines](./CONTRIBUTING.md)  
- Include clear descriptions and context in your PRs  
- Ensure compatibility with all consuming microfrontends  

---

## 📝 Notes

- This repository is **style-only**. Do not include JS/TS logic or UI elements.
- All changes should be reviewed for **design impact and cross-project compatibility**.

---
