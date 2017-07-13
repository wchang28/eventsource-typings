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
    onerror?: (err:Error) => void;
    onmessage?: (message: Message) => void;
    onopen?: () => void;
    close: () => void;
}

export interface InitDict {
	withCredentials?: boolean;	// W3C standard
	// npm eventsource extension (version >= 1.0.0)
	/////////////////////////////////////////////////////////////
	headers?: {[fld:string]:string;};
	https?: {
		rejectUnauthorized?: boolean;
	};
	proxy?: string;
	/////////////////////////////////////////////////////////////
}

/*
export interface EventSourceConstructor {
	(url: string, eventSourceInitDict?:InitDict) : void;
}
*/

export interface EventSourceConstructor {
    new (url: string, eventSourceInitDict?:InitDict): IEventSource;
}
