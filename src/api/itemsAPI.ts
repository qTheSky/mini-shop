import {collection, getDocs} from 'firebase/firestore';
import {db} from 'backendConfig';

export const itemsAPI = {
    getItems() {
        return getDocs(collection(db, '/products'))
    }
}