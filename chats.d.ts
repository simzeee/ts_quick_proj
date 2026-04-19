export declare module "./chats.js" {
    export function log(arg: Chat[]): void;
    export type Chat = {
        time: string;
        message: string;
    }
    export const chats: Chat[];
}

export {}