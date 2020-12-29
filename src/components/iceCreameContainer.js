import React from 'react'
import { connect } from "react-redux"
import { buyIceCreame } from '../redux'

const IceCreameContainer = (props) => {
    return (
        <div style={{padding:"30px", border:"2px dashed blue", marginTop:"10px"}}>
            <h2 style={{color:"green"}}>Number Of Ice Creams { props.numOfIceCreams } </h2>
            <button className="btn btn-primary" onClick={ props.buyIceCreame } >Buy Ice Creame</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numOfIceCreams: state.iceCreame.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyIceCreame: () => dispatch(buyIceCreame())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreameContainer)
