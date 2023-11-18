import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAM6lIwws4qlf78OE8D-GxROA7NBMFYMUM',
  authDomain: 'react-firebase-ccb40.firebaseapp.com',
  projectId: 'react-firebase-ccb40',
  storageBucket: 'react-firebase-ccb40.appspot.com',
  messagingSenderId: '788859249533',
  appId: '1:788859249533:web:508bdbd3a007122fb1e214',
  measurementId: 'G-RQK7CQJ4GQ'
}

const app = initializeApp(firebaseConfig)

export const firestore = getFirestore(app)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
