import React, {Suspense} from 'react'
import Heading from './Heading';


const Lazy = React.lazy(() => import('./LazyLoading'));
const App1 = () => {
  return (
    <div>
        <Heading/>
        <Suspense fallback={<div>Loading...</div>}>
          <Lazy />
        </Suspense>
      
    </div>
  )
}

export default App1
