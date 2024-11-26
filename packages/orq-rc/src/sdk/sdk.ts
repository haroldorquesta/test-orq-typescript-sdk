/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Contacts } from "./contacts.js";
import { Deployments } from "./deployments.js";
import { Evaluators } from "./evaluators.js";
import { Feedback } from "./feedback.js";
import { Files } from "./files.js";
import { Prompt } from "./prompt.js";
import { Prompts } from "./prompts.js";
import { Remoteconfig } from "./remoteconfig.js";

export class Orq extends ClientSDK {
  private _contacts?: Contacts;
  get contacts(): Contacts {
    return (this._contacts ??= new Contacts(this._options));
  }

  private _feedback?: Feedback;
  get feedback(): Feedback {
    return (this._feedback ??= new Feedback(this._options));
  }

  private _deployments?: Deployments;
  get deployments(): Deployments {
    return (this._deployments ??= new Deployments(this._options));
  }

  private _files?: Files;
  get files(): Files {
    return (this._files ??= new Files(this._options));
  }

  private _evaluators?: Evaluators;
  get evaluators(): Evaluators {
    return (this._evaluators ??= new Evaluators(this._options));
  }

  private _prompt?: Prompt;
  get prompt(): Prompt {
    return (this._prompt ??= new Prompt(this._options));
  }

  private _prompts?: Prompts;
  get prompts(): Prompts {
    return (this._prompts ??= new Prompts(this._options));
  }

  private _remoteconfig?: Remoteconfig;
  get remoteconfig(): Remoteconfig {
    return (this._remoteconfig ??= new Remoteconfig(this._options));
  }
}
