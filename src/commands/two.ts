import { Command } from 'commander';
import Conf from 'conf';

// eslint-disable-next-line no-unused-vars
export const two = (program: Command, config: Conf) => {
    return program
        .command('two')
        .description('second command')
        .action(() => {
            console.log('two two two');
        });
};

export default two;
