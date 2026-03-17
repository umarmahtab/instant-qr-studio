<<<<<<< HEAD
# 🚀 Instant QR Studio

Generate stunning QR codes instantly from links or text — with a modern UI, smooth animations, and real-time preview.

---

## ✨ Features

* ⚡ Instant QR generation (no delay)
* 🔗 Supports URLs & plain text
* 👀 Live preview while typing
* 🎨 Clean modern UI with glassmorphism
* 📥 Download QR as high-quality PNG
* 🔄 Auto refresh
* 📱 Fully responsive design

---

## 🖼️ Preview

![App Screenshot](./preview.png)

---

## 🛠️ Tech Stack

* ⚡ Vite
* 🎨 Tailwind CSS
* 🧠 JavaScript
* 📦 QR Code Library

---

## 📂 Project Structure

```
├── src/              # Main source code
├── dist/             # Build output
├── index.html        # Entry HTML
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/instant-qr-studio.git
cd instant-qr-studio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

---

## 📦 Build for production

```bash
npm run build
```

---

## 💡 Future Improvements

* 🎨 Custom QR colors & styles
* 🖼️ Logo inside QR
* 📊 QR analytics (scan tracking)
* 🔗 Short URL integration
* 📁 History of generated QR codes

---

## 🤝 Contributing

Pull requests are welcome! Feel free to fork and improve the project.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Made with ❤️ by Umar
=======
# QR Code Maker

A simple React + Tailwind CSS QR generator that turns links or text into a crisp QR code with smooth motion and bold color.

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview the production build:

   ```bash
   npm run preview
   ```

## Make an Android APK (Capacitor)

1. Install Capacitor dependencies:

   ```bash
   npm install @capacitor/core @capacitor/cli @capacitor/android
   ```

2. Initialize Capacitor (use an app id you own):

   ```bash
   npx cap init "QR Code Maker" "com.yourname.qrcodemaker"
   ```

3. Build the web app and copy it into the native project:

   ```bash
   npm run build
   npx cap copy
   ```

4. Add the Android platform and open it in Android Studio:

   ```bash
   npx cap add android
   npx cap open android
   ```

5. In Android Studio, use **Build > Build Bundle(s) / APK(s) > Build APK(s)** to generate the APK.

If you update the web code later, run `npm run build` and `npx cap copy` again before rebuilding the APK.
>>>>>>> bfac86f (Initial commit - Instant QR Studio)
