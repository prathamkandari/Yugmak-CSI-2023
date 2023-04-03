import React from 'react'
import CarouselControlled from './components/carousel'

const App = () => {
  return (
    
       
        <div>
             <CarouselControlled />
            {/* import image */}
            <img src={require('./test.jpg')} alt="test" />

        </div>
    
  )
}

export default App