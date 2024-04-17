import ContainerCard from "../ContainerCard/ContainerCard"
import iconeSedan from "../../../images/icon-sedans.svg"
import iconeSuv from "../../../images/icon-suvs.svg"
import "./App.css"

const App = () => {
    return(
        <>
        <ContainerCard 
            imagem={iconeSedan}
            titulo="SEDANS"
            texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt sint magnam, facere cupiditate delectus reiciendis consequatur impedit aliquam?"
            classe="sedan"
        />
        <ContainerCard 
            imagem={iconeSuv}
            titulo="SUVS"
            texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt sint magnam, facere cupiditate delectus reiciendis consequatur impedit aliquam?"
            classe="suv"
        />
        </>
    )
}

export default App