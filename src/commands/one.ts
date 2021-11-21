import { Command } from 'commander';
import Conf from 'conf';

// eslint-disable-next-line no-unused-vars
export const one = (program: Command, config: Conf) => {
    return program
        .command('one')
        .description('first command')
        .action(() => {
            config.set('one.timestamp', new Date().toISOString());
            console.log('one one one');
        });
};

export default one;
