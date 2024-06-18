import "./Movie.css"
import data from "../data"
import MovieDeleteButton from "./MovieDeleteButton"
import AllDeleteButton from "./AllDeleteButton"
import ReloadMoviesButton from "./ReloadMoviesButton"
import {useState} from "react"


const Movie = () => {
    const [movieList,setMovieList] = useState(data) // ta zavorka u useState znamena puvodni nastaveni a tam dame ty data a diky useState se ta stranka refresne a bude fungovat to tlacitko pro vymazani

    const deleteOneMovie = (idecko) => { //tady nastavime pro to tlacitko vymazavaci 
        const filteredMovies = movieList.filter((oneMovie) => { //movieList jsou ty data(data ketre se diky use state prejmenovali na movieList) dame pak .filter a napiseme do zavorek OneMovie coz jsou ty jednotlivy objekty(id1,id2.. atd) v tom poli z data.js(ted prejmenovany na movieList)
            return oneMovie.id !== idecko //vrati se vsechny oneMovie id ktere se nerovnaji idecko(neboli nerovna se id na ktery obrazek kliknem napr kliknem na treti obrazek co ma id 3 tak se vymaze obrazek treti)
        })

        setMovieList(filteredMovies) // a musime sem pridat tohle aby se objevili jen obrazky ktere se nerovnaji tomu id na ktere jsme klikli
    }

//tlacitko pro vymazani vsech filmu
    const deleteAllMovies = () => {
        setMovieList([])
    }
//tlacitko pro obnovu vsech filmu
    const reloadAllMovies = () => {
        setMovieList(data)
    }


    return <section> {/* tady jsme pridali section protoze dole pridavame dalsi div kvuli tlacitku button co vse vymaze najendou */}
        <div className="all-movies">
    {
        //predtim misto movieList byly data ale pridali jsme useState aby byl button na vymazani a timpadem se to prejmenovala protoze useState ma movieList
            movieList.map((oneMovie) => {  //tady muze byt cokolik jako nazev, dali jsme napriklad oneMovie.. z tech dat data.map veme z pole prvni objekt a ulozi se do oneMovie a aby se to zobrazilo na strance tak pouzijeme funkci map
            const {id, image, title, age, tags, description} = oneMovie //SLOZENE ZAVORKY TO MA PROTOZE TY DATA JSOU V POLI OBJEKTU A poporade bereme co je v tom objektu id,image atd a tohle zapisujeme protoze rikame co ma delat a dole co ma vratit
        
        return (
            //tim key rikame ze to ma brat unikatni klic a to je id , protoze vyse jsme dali id, image, title atd ale dole tam nikde to id neni pouzity - prohlizec to vyzaduje
            <div className="one-movie" key={id}> 
                <img src={image} alt=""/>
                <h2>{title}</h2>
                <p>{age}</p>
                <p>{tags}</p>
                <p>{description}</p> 
                <MovieDeleteButton deleteMovie={() => deleteOneMovie(id)}/> 
            </div>                           //aby to fungovalo filtrovani podle id, tak nahore se to jmenuje idecko a sem dole zapiseme pred deleteOneMovie () => a na konci (id)
            )})
        
        }
    
    </div>
    <div className="button-box"> 
        <AllDeleteButton deleteMovies={deleteAllMovies}/> 
        <ReloadMoviesButton reloadButton={reloadAllMovies}/>
        
    </div>
        </section>
}

export default Movie