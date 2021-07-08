 <h1 align="Left">  
  <Strong>☔ Weather App Builders - React Native</Strong>
 </h1>

  <img src=".\src\assets\app.gif" />

---

## 🔎 Índice
- [🔎 Índice](#-índice)
- [☔ Sobre](#-sobre)
- [💻 Tecnologias utilizadas](#-tecnologias-utilizadas)
- [🧱 Estrutura do projeto](#-estrutura-do-projeto)
- [📁 Como baixar o projeto e executar](#-como-baixar-o-projeto-e-executar)
- [🔭 Observações](#-observações)

---

## ☔ Sobre

App de previsão do tempo com base na localização do usuário. O App utiliza latitude e longitude para pegar informações do tempo e localização do usuário. Foi utilizada a api do GitHub para personalizar a tela de previsões com as informações do usuário, além de informações da semana corrente.

---

## 💻 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- Axios;
- TypeScript;
- Date Fns;
- Google Maps;
- Geocoder;
- Dotenv;
- Styled Components;
- React Native Responsive Font Size;
  
---

## 🧱 Estrutura do projeto

`./android` -- Arquivos do ambiente Android;

`./ios` -- Arquivos do ambiente IOS;

`./src` -- Pasta principal do projeto;

`./src/assets` -- Arquivos de imagens;

`./src/components` -- Arquivos `.tsx e .ts` de componentes reutilizáveis;

`./src/contexts` -- Arquivos `.tsx` arquivo responsável por armazenar informação global que pode ser compartilhada em algum outro componente;

`./src/pages` -- Arquivos `.tsx` que descrevem componentes React que representam uma página acessável;

`./src/services` -- Arquivos `.ts` com lógica de negócio do app;

`./src/utils/Types` -- Arquivos `.d.ts` globais;

`./src/utils/Temp` -- Arquivos `.ts` com funções de uso global;

---

## 📁 Como baixar o projeto e executar

```bash
# Clonar o repositório
  $ git clone https://github.com/LuizTimboAlcantara/weather_forecast.git

# Entrar na pasta do projeto
  $ cd weather_forecast

# Instalar as dependências do projeto
  $ npm install ou yarn install

# Rodar a aplicação
  $ npx react-native run-android ou npx react-native run-ios 

```

---

## 🔭 Observações

-  É necessário está com o GPS do dispositivo ligado, caso não esteja o app informará que o recurso está inativado;

- Caso seja utilizado o simulador para rodar o app será preciso especificar nas confguração um localização específica;

- Para melhor experiência com o app é aconselhado o a utilização em um dispositivo físico; 

