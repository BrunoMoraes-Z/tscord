import { Message, Client, } from 'discord.js';
import { BotConfig } from './models/Config';
import { config, validateConfig } from './utils/Config';
import { CommandHandler } from './utils/CommandHandler';

validateConfig(config);

const handler = new CommandHandler(config.prefix);
export const client: Client = new Client();

client.on('ready', () => {
  logger('🚀 Bot ativado com sucesso.');
});

client.on('message', (message: Message) => {
  handler.handleMessage(message);
});

client.login(config.token);

export function consoleError(error: Error) {
  console.log('⛔' + error);
}

export function logger(message: string) {
  console.log(message);
}