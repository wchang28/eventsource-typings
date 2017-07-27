export enum ReadyState {
    CONNECTING = 0
    ,OPEN = 1
    ,CLOSED = 2
}

export type Error = Event;

export interface Message {
    data: string;
    lastEventId?: string;
    origin?: string;
}

export interface IEventSource {
    readonly url: string;
    readonly withCredentials: boolean;
    readonly readyState: ReadyState;
    /** Always 0 */
    readonly CONNECTING: ReadyState;
    /** Always 1 */
    readonly OPEN: ReadyState;
    /** Always 2 */
    readonly CLOSED: ReadyState;
    onerror?: (err: Error) => any;
    onmessage?: (message: Message) => void;
    onopen?: (event: Event) => any;
    close () : void;
    addEventListener(event: string, listener: (message: Message) => void) : void;
    removeEventListener(event: string, listener: (message: Message) => void) : void;
}

/** InitDict extension for node eventsource package @ github.com/EventSource/eventsource (version >= 1.0.0) */
export interface InitDictNodeEventSourceExtension {
    headers?: {[fld:string]:string;};
    https?: {
        rejectUnauthorized?: boolean;
    };
    proxy?: string;
}

export interface InitDict extends InitDictNodeEventSourceExtension {
    withCredentials?: boolean;	// W3C standard
}

export interface EventSourceConstructor {
    new (url: string, eventSourceInitDict?:InitDict): IEventSource;
}
