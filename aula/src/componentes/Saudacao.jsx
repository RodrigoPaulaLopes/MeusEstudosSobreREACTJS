import { Component } from "react"

export default class Saudacao extends Component{
    state = {
        tipo: "fala",
        nome: "Rodrigo"
    }
    setTipo(e){
        this.setState({tipo: e.target.value})
    }
    setNome(e){
        this.setState({nome: e.target.value})
    }
    constructor(props){
        super(props)
        this.setTipo = this.setTipo.bind()
        this.setNome = this.setNome.bind()
    }

    render(){

        const {tipo, nome} = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
             <hr/>
               <input type="text" placeholder="nome" value={tipo} onChange={e=>this.setTipo(e)}/>
               <input type="text" placeholder="nome" value={nome} onChange={e=>this.setNome(e)}/>
            </div>
        )
    }
}