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
  apiKey: 'AIzaSyBFOW8mRyaJ33zcOY6ih33vxUF0PFE-Wmw',
  authDomain: 'sushi-2bd73.firebaseapp.com',
  databaseURL: 'https://sushi-2bd73-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: "sushi-2bd73",
  storageBucket: 'sushi-2bd73.appspot.com',
  messagingSenderId: '716604920724',
  appId: '1:716604920724:web:5d216d9d5e8aa3015ab581',
  measurementId: 'G-R1CL4FLHWG',
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
