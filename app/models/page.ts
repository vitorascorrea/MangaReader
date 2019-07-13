import Chapter from './chapter';

export default class Page {
    id: number;
    pageNum: number;
    pageImageUrl: string;
    chapter: Chapter;

    constructor(pageNum: number, pageImageUrl: string, chapter: Chapter) {
        this.pageNum = pageNum;
        this.pageImageUrl = pageImageUrl;
        this.chapter = chapter;
    }
}