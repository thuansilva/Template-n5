# N5-Template

<!--
*** Obrigado por estar vendo este README. 
*** Toda sugestão será muito bem-vinda.
*** Readme basedo no template da Rocktseat [https://github.com/Rocketseat/react-native-template-rocketseat-basic]
-->

<!-- PROJECT SHIELDS -->

[![npm package](https://img.shields.io/npm/v/react-native-template-n5-template?label=npm%20package&style=for-the-badge)](https://www.npmjs.com/package/react-native-template-n5-template)
[![npm](https://img.shields.io/npm/dt/react-native-template-n5-template?style=for-the-badge)](https://www.npmjs.com/package/react-native-template-n5-template)
[![GitHub issues](https://img.shields.io/github/issues/thuansilva/Template-n5?color=red&style=for-the-badge)](https://github.com/thuansilva/Template-Oficial/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/thuansilva/Template-n5?color=yellow&style=for-the-badge)](https://github.com/thuansilva/Template-n5/commits/master)
[![NPM](https://img.shields.io/github/license/thuansilva/Template-n5?logoColor=blue&style=for-the-badge)](https://choosealicense.com/licenses/mit)


## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Motivo](#motivo)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
    - [Passos adicionais no Android](#passos-adicionais-no-Android)
    - [Passo Adicional no IOS](#passo-adicional-no-IOS)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)
- [Contato](#contato)

<!-- ABOUT THE PROJECT -->

## Motivo

Este projeto visa a criação de um template que possa ser utilizado no desenvolvimento de projetos pela comunidade, pois a instalação e configuração das libs podem gerar bastate desconforto, tanto para os iniciantes quanto para os experientes, dificultando dessa forma o desenvolvimento.

### Feito Com

Abaixo segue o que foi utilizado na criação deste template:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
- [React Navigation](https://reactnavigation.org/) - Utilizado para criar uma navegaçao de forma facil;
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - usado para manipulação de gestos;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações JavaScript;
  - [babel-eslint](https://github.com/babel/babel-eslint) - Este pacote é um _wrapper_ do parser do Babel para o ESLint;
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import) - Esse plugin do Babel permite que sejam feitos imports e requires em caminhos baseados em uma raiz(root);
  - [babel-plugin-transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console) - Esse plugin do Babel remove todos os console.\* da sua aplicação ([Dica no site oficial do RN](https://facebook.github.io/react-native/docs/performance#using-consolelog-statements));
- [ESLint](https://eslint.org/) - O ESLint é uma ferramenta de lint plugável para JavaScript e JSX;
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Este pacote fornece o .eslintrc do Airbnb como uma configuração compartilhada extensível;
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Plugin do ESLint com regras para ajudar na validação de imports;
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Verificador estático AST das regras do a11y em elementos JSX;
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Regras de linting do ESLint específicas do React;
  - [eslint-plugin-react-native](https://github.com/Intellicode/eslint-plugin-react-native) - Regras de linting do ESLint específicas do React Native;
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import) - Um resolver da lib _babel-root-import_ para a lib _eslint-plugin-import_;
- [Gitmoji](https://gitmoji.carloscuesta.me/) - É uma iniciativa para padronizar e explicar o uso de emojis nas mensagens de confirmação do GitHub;
- [Import-Helpers](https://github.com/Tibfib/eslint-plugin-import-helpers#readme) - Este pacote foi criado para complementar as regras fornecidas pelo `eslint-plugin-import`. Existem muitas regras ótimas, mas faltam alguns casos de uso importantes;
- [Styled-Components](https://styled-components.com/) - Utilizando [literais tag modelo](https://styled-components.com/docs/advanced#tagged-template-literals) (uma adição recente ao JavaScript) e o CSS, `styled-components` permite escrever código CSS real ao estilo de seus componentes. Também remove o mapeamento entre componentes e estilos - o uso de componentes como uma construção de estilo de baixo nível não poderia ser mais fácil;

<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar o template, seja através do React Native CLI ou com uma cópia local dos arquivos, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo:

[Ambiente React Native (Android/iOS)](https://github.com/Rocketseat/ambiente-react-native)

### Estrutura de Arquivos

A estrutura de arquivos no NPM é está da seguinte maneira:

```bash
n5-template
├── src/
│   ├── pages/
│   │   └── Main/
│   │       └── index.js
│   ├── services/
│   │   └── api.js
│   ├── index.js
│   └── routes.js
├── .eslintrc.json
├── .gitignore
├── babel.config.js
├── dependencies.json
├── devDependencies.json
├── index.js
├── jsconfig.json
├── LICENSE
├── package.json
└── README.md
```

### Instalação

1. Para instalar e utilizar esse template o processo é bem simples, basta criar um projeto novo utilizando o comando:

```sh
react-native init nomedoProjeto --template n5-template
```

2. Depois do projeto criado você pode deletar o arquivo `App.js` da raiz, pois o arquivo `index.js` agora aponta para a pasta **src**.

Com isso o projeto será criado com todas as dependências do template devidamente instaladas e linkadas, tal como os arquivos de configuração que são copiados para o projeto.

---
#### Passos adicionais no Android
- No React Navigation, a partir da  versão do React Native 0.60 e superior, a [vinculação é automática](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md). Então você **não precisa rodar o** `react-native link`.

- Para finalizar a instalação do `react-native-screens` para Android, adicione as duas linhas a `dependencies` seguir na seção `android/app/build.gradle`:

```java
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
```
- Para finalizar a instalação `react-native-gesture-handler`, adicione o seguinte na parte **superior** (verifique se está na parte superior e se não há mais nada antes) do seu arquivo de entrada, como `index.js` ou `App.js`:

```java
import 'react-native-gesture-handler';
```

***Nota: Se você pular esta etapa, seu aplicativo poderá falhar na produção, mesmo que funcione bem no desenvolvimento.***

- Agora, precisamos envolver o aplicativo inteiro `NavigationContainer`. Normalmente, você faria isso no seu arquivo de entrada, como `index.js`ou `App.js`.
---
#### Passo adicional no IOS

Se você estiver em um Mac e desenvolvendo para iOS, precisará instalar pods para concluir a vinculação. Verifique se você possui o [Cocoapods](https://cocoapods.org/) instalado. Então execute:

```sh
cd ios; pod install; cd ..
```
---

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/ContribuiçãoTop`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Contribuição Top!`)
5. Faça o Push da Branch (`git push origin feature/ContribuiçãoTop`)
6. Abra um Pull Request

<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTACT -->

## Contato

Thuan Matheus - [Github](https://github.com/thuansilva) - [LinkedIn](https://br.linkedin.com/in/thuan-matheus-0a5644171)
