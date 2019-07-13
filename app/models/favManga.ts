import ReadChapter from './readChapter';
import Manga from './manga';
import Chapter from './chapter';

export default class FavManga {
    id: number;
    manga: Manga;
    readChapters: Array<ReadChapter>;

    constructor(manga: Manga) {
        this.manga = manga;
    }

    getReadChapters(): Array<ReadChapter> {
        return this.readChapters;
    }

    getReadChapter(id: number): ReadChapter {
        return this.readChapters.find(c => c.id === id);
    }

    addReadChapter(chapter: Chapter): ReadChapter {
        const addedChapter: ReadChapter = new ReadChapter(chapter);
        this.readChapters.push(addedChapter);
        return addedChapter;
    }

    removeReadChapter(id: number) {
        const hasReadChapter: number = this.readChapters.findIndex(c => c.id === id);
        if (hasReadChapter !== null && hasReadChapter !== undefined) {
            this.readChapters.splice(hasReadChapter, 1);
        }
    }
}