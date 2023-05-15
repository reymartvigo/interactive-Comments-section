import { useState } from 'react'


import './styles/index.css'


/* AVATARS  */
import amy from './assets/avatars/image-amyrobson.png';
import juliusomo from './assets/avatars/image-juliusomo.png';
import max from './assets/avatars/image-maxblagun.png';
/* AVATARS  */

/* ICONS  */


import Comment from './components/comment/Comment'
function App() {

  return (
    <>
      <div className="main-wrapper">
        <Comment
          avatar={amy}
          username="amyrobson"
          time="1 month ago"
          content="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well."
          likes={12}
        />

        <Comment
          avatar={max}
          username="maxblagun"
          time="2 weeks ago"
          content="Woah, your project looks awesome! How long have you been coding for? I'm still new, but I think I want to dive into react as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!"
          likes={5}
        />
      </div>

    </>
  )
}

export default App
