import { commands } from '@/commands';
import { createApp } from '@/Application';

createApp()
    .name('{{package.name}}')
    .init(commands)
    .run(process.argv);
