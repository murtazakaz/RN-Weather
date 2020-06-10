# Weather Application

This application is just for demo-test version built using React Native version 0.61.5 (stable).

## Project Structure

We have designed our own project structure and boilerplate thats optimized and easy to use after many experiences which have configured and preinstalled daily to use plugins, configuration, multilingual support, components and utils to make development quicker and not to repeat basic steps again and again.

### Code Structure

In this project, I have use react hooks instead of class components as they are clean, easy to use and newly release by react Team.

Code is breakdown in some components where needed.

### Folder Structure

- All code exist under folder src
- All app level themes which includes fonts,colors,typography etc are under theme folder
- Test cases written in root folder name _tests_ which has snapshot and functional test cases

## Data

As per requirement for persist data, I have used redux and redux-persist to store data in offline mode

### Weather API

As per requirement, [https://openweathermap.org/api](https://openweathermap.org/api) is used for displaying weather information.

## How to run this project

Clone and install all the depedencies using command

> yarn  
> or
> npm install

### Android

Command to run android

> npx react-native run-android

### iOS

Command to run iOS

> npx react-native run-ios

# TEST CASES

In this application, all the test cases are under _tests_ folder

### How to run test cases

Run following command in the root folder

> yarn run test

# Developer

This project is developed by HUL-HUB Mobile Team

Website: [https://www.hul-hub.com/](https://www.hul-hub.com/)
