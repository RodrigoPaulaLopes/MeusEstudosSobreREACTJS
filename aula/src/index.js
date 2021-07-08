import react from 'react'
import reactDOM from 'react-dom' 
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

reactDOM.render(<div>
        <Pai nome="Artur" sobrenome="Lopes">
            <Filho nome="Rodrigo"></Filho>
            <Filho nome="Rayane"></Filho>
        </Pai>
    </div>, document.getElementById('root'))