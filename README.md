# NOVA
## Ambiente de desenvolvimento
- Node.js ^v18
- Yarn

## Instale as dependencias
```
yarn install
```

## Desenvolvimento de UI
Utilizamos o Storybook para desenvolver os componentes isoladamente da lógica da aplicação, confira o [link](https://storybook.js.org/docs/react/get-started/whats-a-story)

Inicie o storybook usando o comando
```
yarn storybook
```

### Gambeta Storybook & Node v18
O Storybook ainda não suporta o Node.js v17 ou superior, a gambiarra no momento é executar manualmente em seu ambiente o seguinte código

LINUX E MAC
```
export NODE_OPTIONS=--openssl-legacy-provider
```

WINDOWS
```
set NODE_OPTIONS=--openssl-legacy-provider
```

## Desenvolvimento do APP
Usamos o react-scripts, mais informações no [link](https://create-react-app.dev/)

### Configurar o HTTPS
Siga as instruções deste link para (mac)[https://stackoverflow.com/questions/62010077/set-up-https-on-localhost-for-macos-mac-os-catalina-10-15-2/73517777#73517777]

Crie um arquivo .env como no modelo abaixo substituindo o caminho exato para os arquivos cert e key que você gerou na sua máquina.
```
HTTPS=true 
SSL_CRT_FILE=/Users/danielborlinodeoliveira/localhost/cert.pem
SSL_KEY_FILE=/Users/danielborlinodeoliveira/localhost/key.pem
```

Inicie o APP usando o comando
```
yarn start
```

## Preparando para publicar
Execute o comando para preparar os arquivos para publicação, tudo será minificado e otimizado para publicação.
```
yarn build
```