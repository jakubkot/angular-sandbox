export class FileDataViewModel {
    public readonly id!: number;
    public readonly name!: string;
    public readonly size!: number;
    public readonly thumbnail: string = "https://www.pinclipart.com/picdir/big/355-3550130_random-image-from-user-pepe-meme-pixel-art.png";

    public constructor(partial: Partial<FileDataViewModel>) {
        Object.assign(this, partial);
    }
}