import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <motion.div className='home container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}>
            <h2>
                <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    Welcome Pizza Boy
                </motion.h2>
            </h2>
            <Link to="/base">
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                    }}
                >
                    Create your pizza
                </motion.button>
            </Link>
        </motion.div>
    );
}

export default Home;