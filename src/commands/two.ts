import { Application } from '@/Application';

// eslint-disable-next-line no-unused-vars
export const two = (app: Application) => {
    return app
        .command('two')
        .description('second command')
        .action(() => {
            console.log('two two two');
        });
};

export default two;
