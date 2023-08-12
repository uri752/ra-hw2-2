import React, {Component} from "react";
import IconSwitch from "../IconSwitch/IconSwitch";
import CardView from "../CardView/CardView";
import ListView from "../ListView/ListView";
import { products } from './../../productsData';

export class Store extends Component {
    
    constructor(props) {
        super(props);        
        this.state = {typeView:'ListView'};
        this.cards = products;
        this.choseTypeView = this.choseTypeView.bind(this);
    }

    render() {
        return(        
        
        <div className='container'>            
            <IconSwitch typeView={this.state.typeView} choseTypeView={this.choseTypeView}/>
            { this.state.typeView === 'ListView' ? <ListView cards = {this.cards}/> : <CardView cards = {this.cards}/> }               
        </div>
        )
    }    

    choseTypeView (typeView) {        
        this.setState({typeView: typeView})        
    }
    
}
