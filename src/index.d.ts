export interface GraphiteOptions {
    background?: string | null;
    padding?: number;
    width?: number;
    radius?: number;
    size?: number;
    font?: string;
    theme?: string;
}

export default class Graphite {
    constructor();
    svg(): Promise<string>;
    png(): Promise<Buffer>;
    base64(): Promise<string>;

}    