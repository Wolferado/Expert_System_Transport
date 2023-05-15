import RadioSelection from './RadioSelection';
import Output from './Output';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");
  const [thirdOption, setThirdOption] = useState("");
  const [fourthOption, setFourthOption] = useState("");

  return (<div id='main-container'>
    <h1>Patstāvīgais darbs #4 - Mūsdienu mākslīga intelekta speciālās nodaļas</h1>
    <h3>Autors: Aleksejs Kareļins 211RDB141</h3>
    <h2>Problēma - transporta līdzekļa izvēle</h2>
    <div id='parameter-container'>
      <RadioSelection name="Attieksme pret dabu?" values={["Pozitīva", "Neitrāla"]} handleChange={e => setFirstOption(e.target.value)}/>
      <RadioSelection name="Transporta līdzekļa veids?" values={["Personāls", "Koplietojams", "Sabiedriskais"]} handleChange={e => setSecondOption(e.target.value)}/>
      <RadioSelection name="Svarīgakais transporta līdzeklī?" values={["Elastīgums", "Kompaktums", "Budžets"]} handleChange={e => setThirdOption(e.target.value)}/>
      <RadioSelection name="Transporta līdzekļa ātrums? (km/st.)" values={["5-15", "15-25", "25+"]} handleChange={e => setFourthOption(e.target.value)}/>
    </div>

    <Output firstOption={firstOption} secondOption={secondOption} thirdOption={thirdOption} fourthOption={fourthOption}/>
  </div>);
}

export default App;