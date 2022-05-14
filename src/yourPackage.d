interface Config {
    url: string;
}

declare module "yourPackage" {
    function start(config:Config):boolean;
    function end(code:number):number;
}