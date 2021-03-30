# React Native app to calculate number factorization
 
This example app shows how to create a React Native application and authenticate with Okta.

Please read [Design and Develop an Android App with React Native and Publish to Google Play Store](https://developer.okta.com/blog/2018/12/26/react-native-android-play-store) to see how this app was created.

**Prerequisites:** [Node.js](https://nodejs.org/) and [Android Studio](https://developer.android.com/studio/).

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage, and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Links](#links)
* [Help](#help)
* [License](#license)

## Getting Started

To install this example application, run the following commands:

```bash
git clone https://github.com/oktadeveloper/okta-react-native-prime-components-example.git
cd okta-react-native-prime-components-example
```

This will get a copy of the project installed locally.

### Create Native Application in Okta

To add authentication with Okta, you'll need an application to authorize against. Install the [Okta CLI](https://cli.okta.com/) and run `okta register` to sign up for a new account. If you already have an account, run `okta login`.

Then, run `okta apps create`. Select the default app name, or change it as you see fit. Choose **Native** and press **Enter**.

Use `com.okta.dev-133337:/callback` for the Redirect URI and the Logout Redirect URI (where `dev-133337.okta.com` is your Okta domain name). Your domain name is reversed to provide a unique scheme to open your app on a device.

The Okta CLI will create an OIDC Native App in your Okta Org. It will add the redirect URIs you specified and grant access to the Everyone group. You will see output like the following when it's finished:

```shell
Okta application configuration:
Issuer:    https://dev-133337.okta.com/oauth2/default
Client ID: 0oab8eb55Kb9jdMIr5d6
```

NOTE: You can also use the Okta Admin Console to create your app. See [Create a Native App](https://developer.okta.com/docs/guides/sign-into-mobile-app/-/create-okta-application/) for more information.

### Specify Your Issuer, Client ID, and Redirect URI

Open `App.js` and adjust the initialization of `AppAuth` with your settings.

```js
auth = new AppAuth({
    issuer: 'https://{yourOktaDomain}/oauth2/default',
    clientId: '{clientId}',
    redirectUrl: '{yourReversedOktaDomain}:/callback'
});
```

Update `android/app/build.gradle` to replace the redirect scheme (`com.oktapreview.dev-158606`) with the one that matches your native app's redirect URI.

### Run the App

To run the app on Android, you'll have to an Android Virtual Device (AVD). Open Android Studio, select open existing project, and choose the `android` directory in your cloned project. If you're prompted to update anything, approve it.

To create a new AVD, navigate to **Tools** > **Android** > **AVD Manager**. Create a new Virtual Device and run it. I recommend using Pixel 2 with `Android API 27 x86`.
 
```bash
npm run android
```

## Links

This example uses the following libraries:

* [React Native App Auth](https://github.com/FormidableLabs/react-native-app-auth)

## Help

Please post any questions as issues on this project, or visit our [Okta Developer Forums](https://devforum.okta.com/). You can also email developers@okta.com if would like to create a support ticket.

## License

Apache 2.0, see [LICENSE](LICENSE).
