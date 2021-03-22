import React, { Component } from 'react'
import goku from './goku.png';
import countHits from './CountHits';

class Goku extends Component {

    render() {

        const {name, addOneHit, hocState, life} = this.props;
        
        const lifeValue = life > 0 ? (<td>{life} %</td>) 
            :(<td><span className="badge badge-danger">mort</span></td>);

        const button = life > 0 ? (<button className="btn btn-success m-3" onClick={addOneHit}>{name} Frapper</button>)
            :(<button className="btn btn-danger disabled m-3" >{name} Mort</button>);

        return (
            <div className="col">
                <img src={goku} alt="Goku"/> <br />
                {button}

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"> Coups </th>
                            <th scope="col"> Vie </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{hocState.hits}</td>
                            {lifeValue}
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default countHits(Goku, 20);
