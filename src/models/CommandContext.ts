import { Message } from 'discord.js';

export class CommandContext {
  readonly parsedCommandName: string;
  readonly args: string[];
  readonly originalMessage: Message;
  readonly prefix: string;

  constructor(message: Message, prefix: string) {
    this.prefix = prefix;
    const split = message.content.slice(prefix.length).trim().split(/ +/g);

    this.parsedCommandName = split.shift()!.toLowerCase();
    this.args = split;
    this.originalMessage = message;
  }
}