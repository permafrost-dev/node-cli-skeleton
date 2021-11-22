import { Application } from '@/Application';

export const three = (app: Application) => {
    return app
        .command('three', { isDefault: true })
        .description('third command')
        .option('-n,--number <number>', 'a number')
        .action(options => {
            console.log(`three ${options.number}`);
        });
};

export default three;
