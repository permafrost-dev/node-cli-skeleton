import { Command } from 'commander';
import Conf from 'conf';

// eslint-disable-next-line no-unused-vars
export const three = (program: Command, config: Conf) => {
    return program
        .command('three', { isDefault: true })
        .description('third command')
        .option('-n,--number <number>', 'a number')
        .action(options => {
            console.log(`three ${options.number}`);
        });
};

export default three;
