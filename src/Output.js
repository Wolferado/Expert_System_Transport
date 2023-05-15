const Output = (props) => {
    /* 
    firstOption - attieksme pret dabai
    secondOption - transporta veids
    thirdOption - svarigs transporta
    fourthOption - nepieciesams atrums
    */

    let result;
    const APD = props.firstOption;
    const TLV = props.secondOption;
    const STL = props.thirdOption;
    const TLA = props.fourthOption;

    if (APD == "Neitrāla" && TLV == "Personāls" && STL == "Elastīgums" && TLA == "25+") 
        result = "Automašīna";
    else if (APD == "Neitrāla" && TLV == "Koplietojams" && STL == "Elastīgums" && TLA == "25+")
        result = "Automašīna";

    else if (APD == "Neitrāla" && TLV == "Sabiedriskais" && STL == "Budžets" && TLA == "25+")
        result = "Sabiedriskais transports";
    else if (APD == "Pozitīva" && TLV == "Sabiedriskais" && STL == "Budžets" && TLA == "25+") 
        result = "Ekoloģisks sabiedriskais transports";

    else if(APD == "Pozitīva" && TLV == "Personāls" && STL == "Elastīgums" && TLA == "5-15")
        result = "Divriteņi un to paveidi";
    else if(APD == "Pozitīva" && TLV == "Koplietojams" && STL == "Elastīgums" && TLA == "5-15")
        result = "Divriteņi un to paveidi";
    else if(APD == "Pozitīva" && TLV == "Personāls" && STL == "Kompaktums" && TLA == "5-15")
        result = "Divriteņi un to paveidi";
    else if(APD == "Pozitīva" && TLV == "Koplietojams" && STL == "Kompaktums" && TLA == "5-15")
        result = "Divriteņi un to paveidi";

    else if (APD == "Pozitīva" && TLV == "Personāls" && STL == "Elastīgums" && TLA == "15-25")
        result = "Elektriskie skrejriteņi"
    else if (APD == "Pozitīva" && TLV == "Personāls" && STL == "Kompaktums" && TLA == "15-25")
        result = "Elektriskie skrejriteņi"
        
    else if (APD == "" || TLV == "" || STL == "" || TLA == "")
        result = "Parametri nav izvēlēti";

    else 
        result = "Nav atbilstoša piedāvājuma";

    return(
        <h1>Piedāvajums: <i>{result}</i></h1>
    );
}

export default Output;