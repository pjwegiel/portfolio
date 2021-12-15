import './App.css'

import { Logolist } from './Components/Logolist/Logolist'

const App = function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Jestem Paweł i jestem <i>ultra</i> dobrym programistą
                    front-end 🌐
                </h1>
            </header>
            <header className="App-header">
                <h2>Główne technologie, których używam: </h2>
                <Logolist />
            </header>
        </div>
    )
}

export default App
