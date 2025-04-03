/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Contacts } from "./contacts.js";
import { Datasets } from "./datasets.js";
import { Deployments } from "./deployments.js";
import { Feedback } from "./feedback.js";
import { Files } from "./files.js";
import { Knowledge } from "./knowledge.js";
import { Prompts } from "./prompts.js";
import { Remoteconfigs } from "./remoteconfigs.js";

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

  private _prompts?: Prompts;
  get prompts(): Prompts {
    return (this._prompts ??= new Prompts(this._options));
  }

  private _remoteconfigs?: Remoteconfigs;
  get remoteconfigs(): Remoteconfigs {
    return (this._remoteconfigs ??= new Remoteconfigs(this._options));
  }

  private _datasets?: Datasets;
  get datasets(): Datasets {
    return (this._datasets ??= new Datasets(this._options));
  }

  private _knowledge?: Knowledge;
  get knowledge(): Knowledge {
    return (this._knowledge ??= new Knowledge(this._options));
  }
}
