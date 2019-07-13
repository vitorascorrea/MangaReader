import Page from './page';
import Manga from './manga';

export default class Chapter {
    id: number;
    chapterNum: number;
    chapterName: string;
    listOfPages: Array<Page>;
    manga: Manga;
}