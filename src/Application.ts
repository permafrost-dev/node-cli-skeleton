import { createConfig } from '@/lib/config';
import { PromptQuestion } from '@/lib/PromptQuestion';
import { Command } from 'commander';
import Conf from 'conf';

const prompts = require('prompts');

export const createApp = (commands: any[] = []) => new Application(commands);

export class Application extends Command {
    public config: Conf;
    public output = process.stdout;

    constructor(commands: any[] = []) {
        super();
        this.config = createConfig();
        this.init(commands)
    }

    public init(commands: any[]) {
        commands.forEach(cmd =>
            cmd(this, this.config)
        );

        return this;
    }

    public run(args: string[] = process.argv) {
        return this.parse(args);
    }

    public write(str: string) {
        this.output.write(str);
    }

    public writeln(str: string) {
        this.write(`${str}\n`);
    }

    public async prompt(questions: PromptQuestion[]) {
        return await prompts(questions);
    }
}

