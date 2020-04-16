import React, {useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import {countrydata} from '../../API/Json'




const Country=()=>{

    const [fetcheddata,setdata]=useState([]);

    useEffect(()=>{
        const fetchdata=async()=>{
            setdata(await countrydata);
        }

        fetchdata();
    },[setdata])

    console.log(fetcheddata[0])    

    return(
        <FormControl>
            <NativeSelect>
                <option value='global'>Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default Country;