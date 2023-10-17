# Snap Pay



# Features 

#### 1. Pin feature used for authorizing transactions and user login



##### 2. Custom in-app notifications



##### 3. Error messages included

### Got some help from [P2P](https://github.com/mohamedtarrek95/Pay-Mobile-P2P-Money-Transfer-App-main?ref=flutterawesome.com)

### Note: The server running this app has already been deployed to render.com, which means you can immediately clone this repo, run it and start using it (i.e The backend is already connected). Since every username on the app is unique, transfers are performed with usernames. Just enter the `@username` of the user and you can easily transfer funds

#### After cloning don't forget to run:

```bash
flutter pub get
```

#### Packages Used

1. <a href="https://pub.dev/packages?q=provider">provider</a>
2. <a href="https://pub.dev/packages/shared_preferences">shared_preferences</a>
3. <a href="https://pub.dev/packages/http">http</a>
4. <a href="https://pub.dev/packages/intl">intl</a>
5. <a href="https://pub.dev/packages/internet_connection_checker">internet_connrction_checker</a>
6. <a href="https://pub.dev/packages/flutter_native_splash">flutter_native_splash</a>

#### Here are some test login details if you don't want to create an account



### But if you choose to run it on your own server, or local environment follow these steps below.

### These are the instructions to successfully run this app on a local environment or your personal server

#### Note Also: It's assumed that you already have a basic knowledge of the Flutter Framework

### The server code is located in /money_transfer_server

## Instructions

1. Locate lib/constants/global_constants.dart and edit line 6 using an ip address that the mobile device is connected to and the port of the server. To get your ip(while connected to the internet, open your terminal and type "ipconflg/all" and locate your ipv4 address). Please note that this changes regularly, so it has to be updated if it changes. If you later decide to deploy the server, don't forget to update the "uri".

```dart
6. const String uri = "https://transfer-dayo-niyi.onrender.com";
```

e.g

```dart
6. const String uri = "192.168.0.1:4000";
```

2. Locate /money_transfer_server/.env and edit line 1 with your mongodb url.

```
1. DATABASE_URL =Enter your mongodb database url here
```



This project is licensed under the MIT License - see the <a href="https://github.com/adedayoniyi/Pay-Mobile-P2P-Money-Transfer-App/blob/main/LICENSE.md">LICENSE</a> file for details.
