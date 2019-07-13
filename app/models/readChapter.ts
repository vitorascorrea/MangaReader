import Chapter from './chapter';

export default class ReadChapter {
    id: number;
    chapter: Chapter;
    lastReadPage: number;

    constructor(chapter: Chapter) {
        this.chapter = chapter;
    }

    getLastReadPage(): number {
        return this.lastReadPage;
    }

    setLastReadPage(lastReadPage: number) {
        this.lastReadPage = lastReadPage;
    }

    isFullyRead(): boolean {
        return this.chapter.listOfPages.length === this.getLastReadPage();
    }
}