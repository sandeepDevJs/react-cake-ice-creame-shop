import React from 'react'
import {connect} from "react-redux"
import { buyCake } from '../redux'

const cakeContainer = (props) => {
    return (
        <div style={{padding:"30px", border:"2px dashed blue", marginTop:"10px"}}>
            <h2 style={{color:"red"}}>Number Of Cakes { props.numOfCakes } </h2>
            <button className="btn btn-primary" onClick={ props.buyCake } >Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numOfCakes:state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake: () =>{
            dispatch(buyCake())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cakeContainer)
