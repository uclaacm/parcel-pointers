import SelectCode from "../components/SelectCode"

const data = [
    'Basketball **basketballPtrPtr = basketballPtr;',
    'Basketball **basketballPtrPtr = &basketballPtr;',
    'Basketball *basketballPtrPtr = *basketballPtr;',
    'Basketball *basketballPtrPtr = basketballPtr;'
]

const Exercise2: React.FC = () => {
    const handleClick = () => {
        return
    }

    return(
        <div style={{display: 'flex', justifyContent: "center", alignItems: "center", minHeight: '100vh'}}>
            <SelectCode choices={data} handleClick={handleClick}/>
        </div>
    )
}

export default Exercise2