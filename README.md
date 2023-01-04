# NOVA
## Development Environment
- Node.js ^v18
- Yarn

## Install dependencies
```
yarn install
```

## UI Development
We use Storybook to develop ui components in isolation from application logic, check out this [link](https://storybook.js.org/docs/react/get-started/whats-a-story)

Start Storybook
```
yarn storybook
```

### Fixing Storybook for Node v18
Storybook does not support Node.js v17 or higher yet, the workaround is to execute in your environment the following

LINUX E MAC
```
export NODE_OPTIONS=--openssl-legacy-provider
```

WINDOWS
```
set NODE_OPTIONS=--openssl-legacy-provider
```

## APP development
We use react-scripts, more on [link](https://create-react-app.dev/)

### Configuring local HTTPS
Follow this instructions for (mac)[https://stackoverflow.com/questions/62010077/set-up-https-on-localhost-for-macos-mac-os-catalina-10-15-2/73517777#73517777]

Create an .env file like the model bellow replacing the exact path to your cert and key files generated on the previous steps.
```
HTTPS=true 
SSL_CRT_FILE=/Users/danielborlinodeoliveira/localhost/cert.pem
SSL_KEY_FILE=/Users/danielborlinodeoliveira/localhost/key.pem
```

Star APP using
```
yarn start
```

## Publishing
Run the build command to get it all minifyied and optimised
```
yarn build
```