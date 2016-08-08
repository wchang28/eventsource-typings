export enum ReadyState {
    CONNECTING = 0
    ,OPEN = 1
    ,CLOSED = 2
}

export interface Error {
    target?: any;
    type?: string;
    bubbles?: boolean;
    cancelable?: boolean;
    view?: any;
    detail?: number;
}

export interface Message {
    data: string;
}

export interface IEventSource {
    url: string;
    readyState: ReadyState;
    onerror: (handler: (err:Error) => void) => void;
    onmessage: (handler: (message:Message) => void) => void;
    onopen: (handler: () => void) => void;
    close: () => void;
}

export interface InitDict {
	headers?: {[fld:string]:string;};
	rejectUnauthorized?: boolean;
}

export interface EventSourceConstructor {
	(url: string, eventSourceInitDict?:InitDict) : void;
}