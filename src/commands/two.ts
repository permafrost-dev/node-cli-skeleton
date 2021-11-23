import { Application } from '@/Application';

const askQuestions = async (app: Application) => {
    const response = await app.prompt([
        {
            type: 'text',
            name: 'github',
            message: `What's your github username?`
        },
        {
            type: 'multiselect',
            name: 'color',
            message: 'Pick one or more colors',
            choices: [
                { title: 'Red', value: '#ff0000' },
                { title: 'Green', value: '#00ff00' },
                { title: 'Blue', value: '#0000ff' }
            ],
        },
        {
            type: 'confirm',
            name: 'value',
            message: 'Can you confirm?',
            initial: true
        }
    ]);

    app.writeln(`github: ${response.github}`);
    app.writeln(`color: ${response.color}`);
    app.writeln(`value: ${response.value ? 'yes' : 'no'}`);

    return response;
}


export const two = (app: Application) => {
    return app
        .command('two')
        .description('second command')
        .action(async () => {
            await askQuestions(app);
        });
};

export default two;
