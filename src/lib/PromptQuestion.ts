/* eslint-disable @typescript-eslint/ban-types */

import { Readable, Writable } from 'stream';

export interface PromptQuestion {
    type: string | CallableFunction;
    name: string | CallableFunction;
    message: string | CallableFunction;
    initial?: any;
    format?: CallableFunction;
    onRender?: CallableFunction;
    onState?: CallableFunction;
    stdin?: Readable;
    stdout?: Writable;
    [key: string]: any;
  }
