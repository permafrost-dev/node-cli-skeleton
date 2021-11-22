/* eslint-disable no-undef */
const { createApp } = require('../src/Application');
const { commands } = require('../src/commands');

it('adds all commands', () => {
    const app = createApp().init(commands);

    expect(app.commands).toHaveLength(commands.length);
});
