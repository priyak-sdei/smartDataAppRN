# React Native Project

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

### Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

    For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! 🎉

You've successfully run and modified your React Native App. 🎊

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

---

## 🔥 Architecture & Best Practices

This project follows **best practices** to ensure high-quality, maintainable, and scalable code.

### ✅ Code Quality & Standards

- **Sonal Cube** – Code quality analysis and bug detection.
- **ESLint & Prettier** – Enforce coding standards and auto-formatting.
- **Husky Pre-Commit Hooks** – Linting and tests run before commits.
- **Lint-Staged** – Run linters only on staged files.

### ✅ Continuous Integration & Deployment (CI/CD)

- **CI/CD for Android Release** – Automate builds, testing, and Play Store deployment.
- **CI/CD for iOS TestFlight** – Automate iOS builds and TestFlight distribution.
- **Fastlane** – Automate app deployment.

### ✅ State Management & Performance Optimization

- **Redux** – Predictable state management.
- **React Query** – Efficient data fetching and caching.
- **Reanimated / Gesture Handler** – Smooth animations and gesture support.
- **Hermes Engine** – Optimized JS engine for better performance.
- **Flipper Integration** – Debugging and performance monitoring tool.

### ✅ Security & Authentication

- **Secure Storage (Keychain / AsyncStorage)** – Secure local data storage.
- **Code Obfuscation & ProGuard** – Protect source code from reverse engineering.

### ✅ Monitoring & Analytics

- **Firebase Crashlytics** – Monitor app crashes and errors.
- **Firebase Analytics** – Track user behavior and app performance.

### ✅ Testing & Debugging

- **Jest & React Native Testing Library** – Unit and integration testing.
- **Detox / Appium** – End-to-end UI testing.

### ✅ API & Networking

- **REST API (Axios / Fetch)** – API calls with error handling.
- **GraphQL (Apollo / Relay)** – Efficient data fetching.
- **WebSockets / MQTT** – Real-time data streaming.
- **Environment-Based Configs** – Secure API keys using `.env`.

### ✅ Offline Support & Caching

- **AsyncStorage / MMKV** – Efficient local storage.
- **SQLite / WatermelonDB / Realm** – Local database management.
- **Redux Persist / React Query Cache** – Offline caching.

### ✅ Navigation & Deep Linking

- **React Navigation** – Screen-to-screen navigation.
- **Deep Linking & Universal Links** – Handle external URL navigation.
- **Dynamic Routing** – Parameter-based navigation.

### ✅ Performance Optimization

- **Lazy Loading & Code Splitting** – Reduce initial app load time.
- **Image Optimization (react-native-fast-image)** – Load and cache images efficiently.
- **Reduce Bundle Size (Metro Config / Hermes)** – Minimize app size.

---

## 🚀 Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

## 📖 Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
