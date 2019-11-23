# angular2020

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular2020)

Angular Descriptions
1. Angular - Anglar is a Javascrit framwork which allows us to create reactive Single Page applications(SPA).
(Note: index.html is the single page that is served)
Javascript changes the DOM by changing the HTML coede during runtime.
URL to learn and grow together with like minded people : https://discord.gg/gxvEWGU

2. Release Date:
Angular 2 - September 2016
Angular Major release in every 6 months.

3. Angular cli wiki - https://github.com/angular/angular-cli/wiki

4. Prerequisites :
NodeJS - https://nodejs.org/en/
Why NodeJS, since its a server side scirpting language ?
NodeJS are used by cli's bundle and optimize our angular project and npm (Node package manager)helps to manage dependencies.

5. Run Below commands on command prompt :
npm install -g @angular/cli 
(or:  npm i -g @angular/cli@latest)
(or:  npm i -g @angular/cli@1.7.3)

ng new my-first-app

ng serve ( To run : runs on localhost:4200)
(or ng seve --open) - To open in deafult browser automatically
(or ng seve -o)

5.1 To install bootstrap dependencies:
npm i --save bootstrap@3 (downloads and store in node_modules folder)
and let angular know about bootstrap : add path of bootstrap from node_modules in styles property of angular.json.

6. IDE
Webstorm (Paid)
Visual Studio code (Free)

7. package.json 
dependencies - lists the thid party packages with versions to buid & run application correctly.
devDependencies - only required for development.
e2e - for end to end testing
node_modules - where all dependencies gets installed.
angular.json - it configures the cli project.

8. Fiest page to load is : index.html 
and index.html load the app-root component.

9. ngModel - Directives
To make typescript understand Forms , we import it from FormsModule of @angular/forms and add in imports of @Ngmodule decorator.

10. 



