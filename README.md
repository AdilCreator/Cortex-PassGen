# 🛡️ Cortex PassGen
**High-Security Password Generator Extension for Chrome.**

Cortex PassGen is a lightweight Google Chrome extension designed with a sleek "Glassmorphism" UI. It allows users to generate cryptographically strong passwords with customizable parameters, ranging from simple 4-character pins to massive 150-character keys[cite: 2, 3].

---

## 🚀 Features
*   **Customizable Forms**: Toggle Uppercase, Lowercase, Numbers, and Symbols to match any website requirement[cite: 3].
*   **Strength Meter**: Real-time security analysis that labels your password from "Weak" to "Military Grade"[cite: 2, 3].
*   **Intelligent Bounds**: Automatically caps input at 150 characters to ensure system stability.
*   **One-Click Copy**: Automatically saves your new password to your clipboard the moment it's generated.
*   **Futuristic UI**: Features rounded corners, neon glows, and intuitive Material Icons for beginners[cite: 3].

---

## 🛠️ Installation (Developer Mode)
Since this is a custom build, follow these steps to load it into your browser[cite: 1]:

1.  **Download/Clone** this repository to your local machine.
2.  Open **Google Chrome** and navigate to `chrome://extensions/`.
3.  In the top-right corner, enable **Developer mode**.
4.  Click the **Load unpacked** button.
5.  Select the folder containing the extension files (the folder with `manifest.json`).
6.  Click the **Puzzle Piece** icon in your toolbar and pin **Cortex PassGen** for easy access!

---

## 📂 Project Structure
```text
CortexPassGen/
├── icons/            # Contains 16x16, 48x48, and 128x128 icons[cite: 4]
├── manifest.json     # Extension configuration and permissions[cite: 4]
├── popup.html        # The futuristic UI and layout[cite: 3]
└── popup.js          # Password logic and strength analysis
