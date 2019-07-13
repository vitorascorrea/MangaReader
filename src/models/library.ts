import FavManga from './favManga';
import Manga from './manga';

export default class Library {
    favMangas: Array<FavManga>;
    
    getFavMangas(): Array<FavManga> {
        return this.favMangas;
    }

    getFavManga(id: number): FavManga {
        return this.favMangas.find(m => m.id === id);
    }

    addFavManga(manga: Manga): FavManga {
        const addedManga: FavManga = new FavManga(manga);
        this.favMangas.push(addedManga);
        return addedManga;
    }

    removeFavManga(id: number) {
        const hasFavManga: number = this.favMangas.findIndex(m => m.id === id);
        if (hasFavManga !== null && hasFavManga !== undefined) {
            this.favMangas.splice(hasFavManga, 1);
        }
    }
}