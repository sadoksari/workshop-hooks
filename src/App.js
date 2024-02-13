import React , { useState , useEffect } from 'react' ;
import './App.css';
import { moviesData } from './data'  ;
import MovieList from './components/MovieList';
import MoviesTitle from './components/MoviesTitle';

import InputTextItem from './InputTextItem';
import AddMovie from './components/AddMovies';

const App = () => {

  const [movies     , setMovies     ] = useState(moviesData) ;
  const [listMovies , setListMovies ] = useState(movies) ;

  const [filtreTitle, setfiltreTitle] = useState();
  const [filtreRate , setfiltreRate ] = useState();

  const [open, setOpen] = useState(false);

  //function pour mettre a jour l'etat d'affichage de la fenetre modal
  const handleDisplay = (etatDisplay) => {
    setOpen(etatDisplay);
  };

  //function pour inserer un nouveau movie dans la liste des movies
  const add = ( newMovie) => {  

      setMovies ( [ ...movies , newMovie]  ) ;

  }
 
  //cette fonction ramene la liste des movies qui verifie les filtres   
  const getListMovies = () => {

      let listMovi = [];
      movies.forEach ( (elem , idx , array) => {   if ( 
                                                        (( filtreTitle && elem.title.includes ( filtreTitle)) || ! filtreTitle  ) &&
                                                        (((filtreRate !==undefined  && elem.rate == filtreRate) ||  filtreRate==undefined   ) ||
                                                          (( filtreRate !==null  && elem.rate == filtreRate) || filtreRate ==null   )    ||
                                                          (( filtreRate !== 0  && elem.rate == filtreRate) || filtreRate == 0   ))
                                                      ) {
                                                      listMovi.push( array[idx]) ;                                                               
                                                   }                                        
                                               }
                     ) ;
      
       setListMovies(listMovi)   ;

   };

   //cette  fonction va s'executer au premier chargement du compsant  et à chaque modif des 3 parametres du tableau
   useEffect (  () => { getListMovies() ; } ,  [filtreTitle , filtreRate, movies]  ) ;
  
   return (
 
    <div className="App" >
     
      <div className="Head">

         <MoviesTitle title="Movies" />
         <div className="filtres">
            <InputTextItem id="filtreTitle"
                           name="filtreTitle"                            
                           type={"text"}
                           width={ 200 }
                           onChangeMethode ={setfiltreTitle} 
                           placeHolder="Type to search in titles..." 
                           labelItem="Title of movies" 
            />
                        
             <InputTextItem id="filtreRate" 
                            name="filtreRate"                              
                            type={"number"} 
                            width={ 100 }
                            onChangeMethode ={setfiltreRate} 
                            placeHolder="Type to search in Rate..." 
                            labelItem="Range of rate of movies" 
             />

           
          </div>
         
      </div>


      <div className="movies" >
         <MovieList movies= {listMovies} />  
      </div>

      <div>
        
         <button type="button" onClick={()=> handleDisplay(true) } >
                Cliquer pour ajouter un Movie
         </button>         
     
 
         <AddMovie isOpen={open}  onClose={ ()=>handleDisplay(false) } listMovies={movies} add={add}  />          
         
      </div>        
 

    </div>
    
  );
}

export default App;


