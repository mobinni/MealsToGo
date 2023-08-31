# Meals To Go

### Setting up full build

1. Go to `functions` folder
2. Make sure you have node 16 running or later (if later update the engine in package.json)
3. Run `yarn`
4. Login to firebase `firebase login`
5. Set the correct project name in `firebase.json`
6. Copy your firebase config and paste it in `App.js` so it connects to the right firebase app
7. Create a `.runtimeconfig.json` with 
```
{
    "stripe": {
        "key": "<empty>"
    },
    "google": {
        "key": "<empty>"
    }
}
```
8. Run `yarn serve` in the firebase folder
9. Run the Expo app
10. Make sure `env.js` is set to mock mode real keys you want to test with (default to true on master).

