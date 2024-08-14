# Star Wars Favorites Mobile Application

This mobile application, developed using React Native (React Native CLI) with TypeScript, allows users to explore and manage their favorite characters from the Star Wars Universe. It is designed for both iOS and Android platforms.

Time spent - 14 hours.

## Features

- **API Integration:** Fetches data from the Star Wars API (SWAPI) to display a list of characters.
- **Character Details:** Users can tap on any character in the list to view detailed information on a dedicated screen.
- **Favorites Management:** Users can add characters to their favorites list, which updates the total count of male, female, and other genders.
- **Reset Functionality:** A "Reset" button allows users to clear all favorites, resetting the counts to zero.

## API

This application utilizes the following API:

- [Star Wars API (SWAPI)](https://swapi.py4e.com/)

## Reference

The application’s design and functionality were inspired by the following reference:

- [Star Wars App Reference](https://sw-app-gilt.vercel.app/)

## Requirements

- **Main Screen:** Displays a scrollable and paginated list of characters. Users can navigate to a detailed screen by selecting a character.
- **Favorites Count:** Allows users to add characters to a favorites list, calculating totals based on gender.
- **Reset Button:** Resets all favorites and associated counts to their initial state.
- **State Management:** Any state management approach can be used.
- **Styling:** The app can be styled using any UI library or framework. Customization based on best UX/UI practices is encouraged.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/read-my-code/star-wars-test-task.git
   cd star-wars-test-task

2. **Install Dependencies:**
   ```bash
   # using npm
   npm install

   # OR using Yarn
   yarn install
   ```

3. **Start your Application:**

   ```bash
   # For iOS
   npx react-native run-ios

   #For Android
   npx react-native run-android
   ```

## Development

**Used Libraries**
- `@react-navigation/native`: ^6.1.18
- `@react-navigation/stack`: ^6.4.1
- `axios`: ^1.7.3
- `react`: 18.2.0
- `react-native`: 0.74.5
- `react-native-gesture-handler`: ^2.18.1
- `react-native-safe-area-context`: ^4.10.8
- `react-native-screens`: ^3.34.0
- `react-native-svg`: ^15.5.0

 ## Authors
- [Nazarii Piatnochka](https://github.com/read-my-code) (read-my-code)