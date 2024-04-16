const code= `
  import { NavLink } from "react-router-dom" 
  import { DivCol, DivFooterContent, DivMainContent, DivRow } from "../componentes/contenedores"
  export function Foter() {
    return (
        <div className="div-footer">
            <DivMainContent>
                <DivFooterContent>
                    <DivRow>
                        <p className="footer-link">Power by DevFarming</p>
                    </DivRow>
                    <DivRow>
                        <NavLink className="footer-link" to="/news">Que hay de nuevo</NavLink>
                        <NavLink className="footer-link" to="/about">About</NavLink>
                        <p className="footer-link">Licencia</p>
                        <NavLink className="footer-link" to="/documentation">Documentacion</NavLink>
                    </DivRow>
                </DivFooterContent>
            </DivMainContent>
        </div>
    );
}` 

const leters=/[a-zA-z]/
const simbols=/[{},."()-/;]/

const parser=(entrada)=>{
    let estado=0;
    let iterador=0;

    while(iterador<entrada){
        switch(estado){
            case 0:
                
                break;
        }
    }
}

for(let i=0; i<code.length; i++){
    if(leters.test(code[i])){
        console.log(code[i])
    }
    if(simbols.test(code[i])){
        console.log(code[i])
    }
}