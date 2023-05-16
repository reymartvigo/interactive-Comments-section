import { useState } from 'react'


import './styles/index.css'


/* AVATARS  */
import amy from './assets/avatars/image-amyrobson.png';

import max from './assets/avatars/image-maxblagun.png';
import ram from './assets/avatars/image-ramsesmiron.png';
/* AVATARS  */

/* ICONS  */


import Comment from './components/comment/Comment'
import Reply from './components/reply/Reply';
import AddComment from './components/comment/AddComment';

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

        <Reply
          avatar={ram}
          username="ramsesmiron"
          time="2 days ago"
          tag="@maxblagun"
          content="If you're still new, I'd recommend focusing on the fundamentals of HTML ,CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid fooundation first."
          likes={4}
        />
        <AddComment />
      </div>


    </>
  )
}

export default App
