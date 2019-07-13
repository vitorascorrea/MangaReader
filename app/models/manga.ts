import Chapter from './chapter';

export default class Manga {
    id: number;
    name: string;
    summary: string;
    coverImageUrl: string;
    listOfChapters: Array<Chapter>;

    constructor(name: string, summary: string, coverImageUrl: string) {
        this.name = name;
        this.summary = summary;
        this.coverImageUrl = coverImageUrl;
    }
}