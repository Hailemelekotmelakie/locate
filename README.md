# Locate Project

## Overview

The Locate Project is a comprehensive solution that includes a Cordova-based mobile application and a React-based web application. The project aims to provide geolocation and mapping functionalities to users, leveraging modern web and mobile technologies.

## Features

### Cordova Mobile Application

- **Geolocation**: The mobile application can determine the user's current location using the device's GPS.
- **Compass**: Access to the device's compass to provide orientation information.
- **Responsive Design**: The application is designed to work seamlessly on various mobile devices.
- **Cross-Platform**: Built with Apache Cordova, the application can run on both Android and iOS devices.

### React Web Application

- **Interactive Maps**: Integration with Leaflet to provide interactive maps that users can interact with.
- **State Management**: Utilizes Redux for efficient state management across the application.
- **Modern UI**: Built with Tailwind CSS to provide a modern and responsive user interface.
- **Fast Development**: Leveraging Vite for fast development and build processes.
- **Type Safety**: Written in TypeScript to ensure type safety and reduce bugs.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Cordova CLI installed globally for the mobile application.

### Running the Cordova Mobile Application

1. Navigate to the `cordova/gaedc-map` directory.
2. Install the necessary plugins and platforms:
    ```sh
    cordova platform add android
    cordova plugin add cordova-plugin-geolocation cordova-plugin-device-orientation
    ```
3. Run the application on an Android device or emulator:
    ```sh
    cordova run android
    ```

### Running the React Web Application

1. Navigate to the `react` directory.
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm run dev
    ```

## License

This project is licensed under the Apache License, Version 2.0. See the [LICENSE](cordova/gaedc-map/LICENSE) file for more details.

## Authors

- Apache Cordova Team