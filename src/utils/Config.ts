import { BotConfig } from '../models/Config';

export const config = require('../../config.json') as BotConfig;

export function validateConfig(config: BotConfig) {
  if (!config.token) {
    throw new Error('You need to specify your Discord bot token!');
  }
}