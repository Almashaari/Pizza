import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Home = () => {
    return ( 
        <div className='Home container'>
            <h2>
                <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    Welcome Pizza Boy
                </motion.h2>
            </h2>
            <Link to="/base">
                <button>
                        Click Me
                </button>
            </Link>
        </div>
     );
}
 
export default Home;