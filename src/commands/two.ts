import { Application } from '@/Application';

export const two = (app: Application) => {
    return app
        .command('two')
        .description('second command')
        .action(() => {
            console.log('two two two');
        });
};

export default two;
