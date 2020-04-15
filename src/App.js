import React from 'react';

import {Cards,Chart,Country} from './Component/index';
import styles from './App.module.css'
import {fetchData} from './api'


class App extends React.Component{


    state={
        data:{}
    }


    async componentDidMount(){
        const fetchedData=await fetchData();
        console.log(fetchedData);
        this.setState({data:fetchedData})
    }

    

    render(){
        return(
            <div className={styles.container}> 
                <Cards data={this.state.data}/>
                <Chart/>
                
            </div>
        )
    }
}

export default App;