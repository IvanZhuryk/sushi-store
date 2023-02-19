import './sass/index.scss'


import { useDispatch } from 'react-redux'
import { initializeApp } from "firebase/app";
import { DataSnapshot, child, getDatabase, ref ,get} from "firebase/database";
import { addSushi } from './redux/slices/sushiSlice'
import { useEffect } from 'react'

import { Route,  Routes } from 'react-router-dom';
import HomePadge from './pages/HomePadge';
import Sushi from './pages/Sushi';
import SushiSet from './pages/SushiSet';
import Pizza from './pages/Pizza';
import PizaSet from './pages/PizaSet';
import Wok from './pages/Wok';
import Selet from './pages/Selet';
import Sneks from './pages/Sneks';
import Drinks from './pages/Drinks';
import NotFoundPadge from './pages/NotFoundPadge';
import Layout from './componets/Layout';
import { addSushiSet } from './redux/slices/sushiSetSlice';
import { addPizzaSet } from './redux/slices/pizzaSetSlice';
import { addwok } from './redux/slices/wokSlice';
import { addSelet } from './redux/slices/seletSlice';
import { addSneks } from './redux/slices/sneksSlice';
import { addPizza } from './redux/slices/pizzaSlice';
import { addDrinks } from './redux/slices/drinksSlice';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db =getDatabase(app);
const colRef =ref(db,'items')



function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    get(child(colRef,`sushi`)).then((DataSnapshot)=>{
      if(DataSnapshot.exists()){
        dispatch(addSushi(DataSnapshot.val()))
      }
      })
  },[])
  useEffect(()=>{
    get(child(colRef,`sushiSet`)).then((DataSnapshot)=>{
      if(DataSnapshot.exists()){
        dispatch(addSushiSet(DataSnapshot.val()))
      }
      })
  },[])
  useEffect(()=>{
    get(child(colRef,`pizzaSet`)).then((DataSnapshot)=>{
      if(DataSnapshot.exists()){
        dispatch(addPizzaSet(DataSnapshot.val()))
      }
      })
  },[])
  useEffect(()=>{
    get(child(colRef,`wok`)).then((DataSnapshot)=>{
      if(DataSnapshot.exists()){
        dispatch(addwok(DataSnapshot.val()))
      }
      })
  },[])
  useEffect(()=>{
    get(child(colRef,`selet`)).then((DataSnapshot)=>{
      if(DataSnapshot.exists()){
        dispatch(addSelet(DataSnapshot.val()))
      }
      })
  },[])
  useEffect(()=>{
    get(child(colRef,`sneks`)).then((DataSnapshot)=>{
      if(DataSnapshot.exists()){
        dispatch(addSneks(DataSnapshot.val()))
      }
      })
  },[])
  useEffect(()=>{
    get(child(colRef,`pizza`)).then((DataSnapshot)=>{
      if(DataSnapshot.exists()){
        dispatch(addPizza(DataSnapshot.val()))
      }
      })
  },[])
  useEffect(()=>{
    get(child(colRef,`drinks`)).then((DataSnapshot)=>{
      if(DataSnapshot.exists()){
        dispatch(addDrinks(DataSnapshot.val()))
      }
      })
  },[])
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePadge/>}></Route>
        <Route path='sushi' element={<Sushi/>}></Route>
        <Route path='sushiSet' element={<SushiSet/>}></Route>
        <Route path='piza' element={<Pizza/>}></Route>
        <Route path='pizaSet' element={<PizaSet/>}></Route>
        <Route path='wok' element={<Wok/>}></Route>
        <Route path='selet' element={<Selet/>}></Route>
        <Route path='sneks' element={<Sneks/>}></Route>
        <Route path='drinks' element={<Drinks/>}></Route>
        <Route path='*' element={<NotFoundPadge/>}></Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
