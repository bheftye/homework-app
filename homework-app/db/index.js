import PouchDB from 'pouchdb-react-native';
import Config from '../config/index';

const homeworkDB = new PouchDB(Config.database.name, { adapter: 'asyncstorage' });

export {homeworkDB}
