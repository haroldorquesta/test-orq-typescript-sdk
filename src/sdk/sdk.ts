/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Contacts } from "./contacts.js";
import { Deployments } from "./deployments.js";
import { Evals } from "./evals.js";
import { Evaluators } from "./evaluators.js";
import { Feedback } from "./feedback.js";
import { Files } from "./files.js";
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

  private _evals?: Evals;
  get evals(): Evals {
    return (this._evals ??= new Evals(this._options));
  }

  private _remoteconfig?: Remoteconfig;
  get remoteconfig(): Remoteconfig {
    return (this._remoteconfig ??= new Remoteconfig(this._options));
  }
}