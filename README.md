# Get started Library test
```
import Button from "library-test-omar";

const App = () => {
    const onClick = () => {
        return console.log("Click al boton");
    }
    
    return <Button style={{color: "white"}} onClick={onClick} className="my-style-button">Nombre del botton</Button>
}

export default App
```
