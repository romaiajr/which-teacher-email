import firebase from 'firebase/app'
import 'firebase/firestore'
firebase.initializeApp({
  projectId: 'emailsdocentesuefs',
  databaseURL: 'emailsdocentesuefs.firebaseapp.com'
})
export const db = firebase.firestore()

db.settings({ timestampsInSnapshots: true })