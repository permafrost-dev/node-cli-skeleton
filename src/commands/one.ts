import { Application } from '@/Application';
import chalk from 'chalk';

export const one = (app: Application) => {
    return app
        .command('one')
        .description('first command')
        .action(() => {
            app.config.set('one.timestamp', new Date().toISOString());
            app.writeln(chalk.greenBright(`one one`));
        });
};

export default one;
