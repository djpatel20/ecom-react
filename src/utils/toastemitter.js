import { toast , Bounce} from 'react-toastify';

export const toastemitter = (prompt) => {
 
                return toast.info(prompt, {
                     position: "top-right",
                     autoClose: 500,
                     hideProgressBar: false,
                     closeOnClick: false,
                     pauseOnHover: true,
                     draggable: true,
                     progress: undefined,
                     theme: "dark",
                     transition: Bounce,
                     })
              }

