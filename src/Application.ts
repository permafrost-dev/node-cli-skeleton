import { Command } from 'commander';
import Conf from 'conf';
import { createConfig } from './lib/config';

export const createApp = (commands: any[] = []) => new Application(commands);

export class Application extends Command {
    public config: Conf;

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
}

