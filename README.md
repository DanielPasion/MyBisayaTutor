# MyBisayaTutor
An AI-powered language learning app that leverages LLMs to provide accessible, on-demand resources for learning Bisaya.

## Features
### 24/7 Bisaya Tutor
<img width="auto" height="250" alt="image" src="https://github.com/user-attachments/assets/ab58bff5-3e91-4ba8-9e9a-cc781b7dbfad" />  
 
- Comes with a personal AI tutor to assist you with any language learning activites
 
### Audio Comprhension
<img width="auto" height="250" alt="image" src="https://github.com/user-attachments/assets/d28e94c1-1bd7-4043-bb2b-2a957615a011" /> 
 
- Audio Practice based off CERF ratings to match your current skill set

### Flashcards
<img width="auto" height="250" alt="image" src="https://github.com/user-attachments/assets/b7c4978c-2339-4a57-b6a2-1945c8891489" /> 
 
- Flashcards that are sortable by noun, verb, adjective, and other. Selectable amount of cards to study during a session is available as well. 

### Translator
<img width="auto" height="250" alt="image" src="https://github.com/user-attachments/assets/4ac33ab2-2a15-4a76-8f58-48a6ca903772" /> 
 
- English <-> Bisaya translator that gives an example for short phrases and words, as well as an audio pronounciation of the requested translation

## Tech Stack
- React Native (Typescript, built with Expo)
- Node.js (express), Typescript for server (see: <a href="https://github.com/DanielPasion/MBTServer">here</a>)

## Running Locally
- This app has compatibility for both the web and ios (no android support is included)

### Web
```npx expo start```

### Ios
```npx expo start```
```s```
```i```

## Building (ios)
- You can build to ios the following ways _(Xcode is required for both) _
   - Plug in your phone and run: ```npx react-native run-ios --mode Release ```
   - ---or---
   - ```eas build -p ios``` and deploy the downloaded file to flighttest
