export class Pride {
    constructor(width?: number, height?: number);

    agender(imageBuffer: Buffer, opacity?: number): Promise<Buffer>;
    ally(imageBuffer: Buffer, opacity?: number): Promise<Buffer>;
    aromantic(imageBuffer: Buffer, opacity?: number): Promise<Buffer>;
    asexual(imageBuffer: Buffer, opacity?: number): Promise<Buffer>;
    bisexual(imageBuffer: Buffer, opacity?: number): Promise<Buffer>;
    demisexual(imageBuffer: Buffer, opacity?: number): Promise<Buffer>;
    genderfluid(imageBuffer: Buffer, opacity?: number): Promise<Buffer>;
    genderqueer(imageBuffer: Buffer, opacity?: number): Promise<Buffer>;
    homosexual(imageBuffer: Buffer, opacity?: number): Promise<Buffer>;
    intersex(imageBuffer: Buffer, opacity?: number): Promise<Buffer>;
    lesbian(imageBuffer: Buffer, opacity?: number): Promise<Buffer>;
    nonbinary(imageBuffer: Buffer, opacity?: number): Promise<Buffer>;
    pansexual(imageBuffer: Buffer, opacity?: number): Promise<Buffer>;
    polyamory(imageBuffer: Buffer, opacity?: number): Promise<Buffer>;
    polysexual(imageBuffer: Buffer, opacity?: number): Promise<Buffer>;
    progress(imageBuffer: Buffer, opacity?: number): Promise<Buffer>;
    transgender(imageBuffer: Buffer, opacity?: number): Promise<Buffer>;
}

export default Pride;
