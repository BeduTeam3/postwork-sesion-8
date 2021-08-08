# BEDU - Desarrollo Web

Fase 2 - Equipo #3
- Erick Carranza Meza | [ErickCM14](https://github.com/ErickCM14)
- Hiram Chávez López | [JustLearningMX](https://github.com/JustLearningMX)
- Justine Delgado | [JustStewartt](https://github.com/JustStewartt)
- David Rivera Orozco | [davriv](https://github.com/davriv)
- Jesus Salvador Uribe | [mnchava](https://github.com/mnchava)

## [Postwork de la sesión 8](https://github.com/beduExpert/Programacion-JavaScript-Santander-2021/tree/main/Sesion-08/Postwork)

### Objetivos
Configurar un ambiente de desarrollo para una aplicación nueva

 Esta es la primera parte de ese proyecto y consiste en dejar listo el ambiente de desarrollo:

- [ ] Desarrolla los mockups de la aplicación, esto te permitirá visualizar cómo se van a acomodar todos los elementos mucho antes de crear el código. Es parte fundamental en el desarrollo del software.
- [x] Instalar y configurar:
  - [x] Webpack
  - [x] Babel
  - [x] Webpack Dev Server.
- [ ] Instalar las librerías que se vayan a utilizar (Bootstrap, Materialize, Foundation, etc.).
- [ ] Configurar los loaders necesarios para los estilos, se puede utilizar CSS o SASS.

## Clonar y correr este proyecto

```
git clone https://github.com/BeduTeam3/postwork-sesion-8
npm init -y
```
Instalar WebPack, CLI y Dev Server
```
npm install --save-dev webpack webpack-cli html-webpack-plugin webpack-dev-server
```
Instalar Babel
```
npm install --save-dev @babel/core @babel/preset-env babel-loader
```
Instalar loaders para CSS
```
npm install --save-dev css-loader style-loader
```