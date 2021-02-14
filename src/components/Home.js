import React from 'react'
import Navbar from './Navbar'
import Maincard from './Maincard'
import Featured from './Featured'

class Home extends React.Component {
    render() {
        return(
            <div style={{position:'relative'}}>
                <Navbar />
            <div>
                <Maincard Home />
                
            </div>
            
            
            </div>
          
        )
    }
}
export default Home