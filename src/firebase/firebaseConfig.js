import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyAoyBRKXKpg7Sro0xqXuxLOz3NcuZQ1CN4',
  authDomain: 'invoices-app-b3853.firebaseapp.com',
  projectId: 'invoices-app-b3853',
  storageBucket: 'invoices-app-b3853.appspot.com',
  messagingSenderId: '628876518039',
  appId: '1:628876518039:web:bf7a6783005a76ceed7fd2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
const db = getFirestore(app)
