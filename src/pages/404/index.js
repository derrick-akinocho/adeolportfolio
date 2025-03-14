import "./404.css"
import React from "react";
import Button from "../../components/_atoms/button";

function Page404 (props) {

    return(
        <div className="content404">
            <div className="_404">

                <h1>404 Zzz...</h1>
                <div className="img"/>

                <p>Oops! Il semble que cette page soit tombée dans les bras de Morphée. Revenez plus tard !!!</p>

                <Button title="Retour" to="/"/>

            </div>
        </div>
    )
}

export default Page404