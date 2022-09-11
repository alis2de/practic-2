import Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'
import { useState } from 'react';

const Navbar = () => {
    
    const[btnclick , setbtnclick] = useState(false)
     function click (){
        setbtnclick(true)
        if(2 * click){
            setbtnclick(false)
        }
     }
    return (
        <div className='w-100 h-100 py-4'>
            <div className='container d-flex flex-wrap text-white'>
                <div className='w-50'>
                    <Button onClick={()=> click()} className='style-btn'>hello</Button>
                    <div className={`bg-white w-25 h-100 text-primary rounded ${btnclick ? 'd-block' : 'd-none'}`}>
                       <div>s</div>
                       <div>m</div>
                       <div>g</div>
                    </div>
                </div>
                <div className='w-50'>

                </div>
            </div>

        </div>
    )
}
export default Navbar