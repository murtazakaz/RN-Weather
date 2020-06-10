module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
        templateFile: 'generators/component/Component.js.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{pascalCase name}}/__test__/{{pascalCase name}}.test.js',
        templateFile: 'generators/component/Component.spec.js.hbs',
      },
      // {
      //   type: 'add',
      //   path:
      //     'src/components/{{pascalCase name}}/{{pascalCase name}}.module.css',
      //   templateFile: 'plop-templates/Component/Component.module.css.hbs',
      // },
      // {
      //   type: 'add',
      //   path: 'src/components/{{pascalCase name}}/index.js',
      //   templateFile: 'plop-templates/Component/index.js.hbs',
      // },
      {
        type: 'add',
        path: 'src/components/index.js',
        templateFile: 'generators/component/index.hbs',
        skipIfExists: true,
      },
      // {
      //   type: 'append',
      //   path: 'src/components/index.js',
      //   pattern: '/* PLOP_INJECT_IMPORT */',
      //   template: "import {{pascalCase name}} from './{{pascalCase name}}';",
      // },
      {
        type: 'append',
        path: 'src/components/index.js',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: "export * from './{{pascalCase name}}/{{pascalCase name}}';",
      },
    ],
  });

  plop.setGenerator('module', {
    description: 'Create a Module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Your module name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/screens/{{camelCase name}}/{{properCase name}}Component.js',
        templateFile: 'generators/module/ModuleComponent.hbs',
      },
      {
        type: 'add',
        path: 'src/screens/{{camelCase name}}/{{properCase name}}Container.js',
        templateFile: 'generators/module/ModuleContainer.hbs',
      },
      {
        type: 'add',
        path:
          'src/screens/{{pascalCase name}}/__test__/{{pascalCase name}}.test.js',
        templateFile: 'generators/module/ModuleTest.hbs',
      },
      {
        type: 'add',
        path: 'src/screens/{{pascalCase name}}/{{pascalCase name}}.style.js',
        templateFile: 'generators/module/ModuleStyle.hbs',
      },
      //   {
      //     type: 'add',
      //     path: 'src/screens/{{pascalCase name}}/index.js',
      //     templateFile: 'plop-templates/Page/index.js.hbs',
      //   },
      {
        type: 'add',
        path: 'src/screens/index.js',
        templateFile: 'generators/module/index.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/screens/index.js',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template:
          "import {{pascalCase name}}Container from './{{pascalCase name}}/{{pascalCase name}}Container';",
      },
      {
        type: 'append',
        path: 'src/screens/index.js',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: '\t{{pascalCase name}}Container,',
      },
    ],
  });

  //   plop.setGenerator('service', {
  //     description: 'Create service',
  //     prompts: [
  //       {
  //         type: 'input',
  //         name: 'name',
  //         message: 'What is your service name?',
  //       },
  //     ],
  //     actions: [
  //       {
  //         type: 'add',
  //         path: 'src/services/{{camelCase name}}.js',
  //         templateFile: 'plop-templates/service.js.hbs',
  //       },
  //       {
  //         type: 'add',
  //         path: 'src/services/index.js',
  //         templateFile: 'plop-templates/injectable-index.js.hbs',
  //         skipIfExists: true,
  //       },
  //       {
  //         type: 'append',
  //         path: 'src/services/index.js',
  //         pattern: '/* PLOP_INJECT_IMPORT */',
  //         template: "import {{camelCase name}} from './{{camelCase name}}';",
  //       },
  //       {
  //         type: 'append',
  //         path: 'src/services/index.js',
  //         pattern: '/* PLOP_INJECT_EXPORT */',
  //         template: '\t{{camelCase name}},',
  //       },
  //     ],
  //   });

  //   plop.setGenerator('hook', {
  //     description: 'Create a custom react hook',
  //     prompts: [
  //       {
  //         type: 'input',
  //         name: 'name',
  //         message: 'What is your hook name?',
  //       },
  //     ],
  //     actions: [
  //       {
  //         type: 'add',
  //         path: 'src/hooks/{{camelCase name}}.js',
  //         templateFile: 'plop-templates/hook.js.hbs',
  //       },
  //       {
  //         type: 'add',
  //         path: 'src/hooks/index.js',
  //         templateFile: 'plop-templates/injectable-index.js.hbs',
  //         skipIfExists: true,
  //       },
  //       {
  //         type: 'append',
  //         path: 'src/hooks/index.js',
  //         pattern: '/* PLOP_INJECT_IMPORT */',
  //         template: "import {{camelCase name}} from './{{camelCase name}}';",
  //       },
  //       {
  //         type: 'append',
  //         path: 'src/hooks/index.js',
  //         pattern: '/* PLOP_INJECT_EXPORT */',
  //         template: '\t{{camelCase name}},',
  //       },
  //     ],
  //   });
};

//================================
//   plop.setGenerator('module', {
//     description: 'Generates new module with or without redux connection',
//     prompts: [
//       {
//         type: 'input',
//         name: 'name',
//         message: 'Module name (Casing will be modified)',
//       },
//       {
//         type: 'list',
//         name: 'type',
//         message: 'Choose Module type',
//         choices: ['statefull', 'stateless'],
//       },
//     ],
//     actions(data) {
//       const actions = [
//         {
//           type: 'add',
//           path: 'src/modules/{{camelCase name}}/{{properCase name}}View.js',
//           templateFile: 'generators/module/ModuleView.js.hbs',
//         },
//         {
//           type: 'add',
//           path:
//             'src/modules/{{camelCase name}}/{{properCase name}}ViewContainer.js',
//           templateFile: 'generators/module/ModuleViewContainer.js.hbs',
//         },
//       ];

//       if (data.type === 'statefull') {
//         actions.push({
//           type: 'add',
//           path: 'src/modules/{{camelCase name}}/{{properCase name}}State.js',
//           templateFile: 'generators/module/ModuleState.js.hbs',
//         });
//         actions.push({
//           type: 'modify',
//           path: 'src/redux/reducer.js',
//           pattern: /\/\/ ## Generator Reducer Imports/gi,
//           template:
//             "// ## Generator Reducer Imports\r\nimport {{camelCase name}} from '../modules/{{camelCase name}}/{{properCase name}}State';",
//         });
//         actions.push({
//           type: 'modify',
//           path: 'src/redux/reducer.js',
//           pattern: /\/\/ ## Generator Reducers/gi,
//           template: '// ## Generator Reducers\r\n  {{camelCase name}},',
//         });
//       }

//       return actions;
//     },
//   });

//   plop.setGenerator('component', {
//     description: 'Generates new component',
//     prompts: [
//       {
//         type: 'input',
//         name: 'name',
//         message: 'Component name (Casing will be modified)',
//       },
//     ],
//     actions: [
//       {
//         type: 'add',
//         path: 'src/components/{{properCase name}}.js',
//         templateFile: 'generators/component/Component.js.hbs',
//       },
//       {
//         type: 'add',
//         path: 'src/components/__tests__/{{properCase name}}.spec.js',
//         templateFile: 'generators/component/Component.spec.js.hbs',
//       },
//       {
//         type: 'modify',
//         path: 'src/components/index.js',
//         pattern: /\/\/ ## Generator Components Imports/gi,
//         template:
//           "// ## Generator Components Imports\r\nimport {{properCase name}} from './{{properCase name}}';",
//       },
//       {
//         type: 'modify',
//         path: 'src/components/index.js',
//         pattern: /\/\/ ## Generator Components Exports/gi,
//         template:
//           '// ## Generator Components Exports\r\n  {{properCase name}},',
//       },
//     ],
//   });
// };
