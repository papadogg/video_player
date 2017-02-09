import React from 'react';
import '../style.css';
import Main from './Main';

class App extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">               
                    <div className="video col-md-6 col-md-offset-3">
                        <h1>React Video app</h1>
                        <Main/>
                    </div>
                </div>
            </div>
        );     
    }
}

export default App;