import { Application } from '@/Application';

// eslint-disable-next-line no-unused-vars
export const one = (app: Application) => {
    return app
        .command('one')
        .description('first command')
        .action(() => {
            app.config.set('one.timestamp', new Date().toISOString());
            console.log('one one one');
        });
};

export default one;
