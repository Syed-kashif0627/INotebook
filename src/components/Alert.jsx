import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext';


const Alert = () => {
    const context=useContext(noteContext);
    const {alert}=context;

    const captilize= (word)=>{
        // const lower=word.toLowerCase()
        if(word==='danger')
            word='error';
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
  return (
        <div style={{height:'50px'}}>
        {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            <strong>{captilize(alert.type)}</strong>:{alert.msg}
        </div>}
        </div>
  )
}

export default Alert
