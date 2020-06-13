import { Message } from 'discord.js';
import { CommandContext } from '../models/CommandContext';

export interface Command {
  readonly commandNames: string[];

  getHelpMessage(commandPrefix: string): string;

  run(parsedUserCommand: CommandContext): Promise<void>;

  hasPermissionToRun(parsedUserCommand: CommandContext): boolean;
}