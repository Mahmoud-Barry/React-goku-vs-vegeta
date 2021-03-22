import React, {Component} from 'react';


const countHits = (WrappedComponent, power) => {

    class countHits extends Component {

        state = {
            hits: 0
        }
    
        addOne = () =>{
            this.setState((prevState) => {
                return {
                    hits: prevState.hits +1
                }
            })
        }
    
        componentDidUpdate(prevProps, prevState) {
            if(this.state !== prevState){
                const CompName = WrappedComponent.name;
                this.props.reduceHandler(CompName, power);
            }
        }
        

        render() {
            return <WrappedComponent addOneHit={this.addOne} hocState={this.state} {...this.props}/>
        }
    }

    return countHits
}



export default countHits;