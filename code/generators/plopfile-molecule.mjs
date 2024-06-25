const generate = (
  /** @type {import("plop").NodePlopAPI} */
  plop
) => {
  plop.setGenerator('component', {
    description: 'Create a molecule',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your molecule name?'
      }
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: '../src/components/molecules/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/molecules/{{pascalCase name}}/{{pascalCase name}}.interfaces.ts',
        templateFile: 'templates/Component.interfaces.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/molecules/{{pascalCase name}}/{{pascalCase name}}.module.css',
        templateFile: 'templates/Component.module.css.hbs'
      },
      {
        type: 'add',
        path: '../src/components/molecules/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/Component.stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/molecules/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/Component.test.tsx.hbs'
      }
    ] // array of actions
  })
}

export default generate
