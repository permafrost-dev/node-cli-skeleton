import { commands } from '@/commands';
import { createApp } from '@/Application';

createApp()
    .init(commands)
    .run(process.argv);
