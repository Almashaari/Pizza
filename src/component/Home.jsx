import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const buttonVarials = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
    },
    visible: {
        transition: { delay: 2 },
    }
}

const containerVariants = {
    hidden : {
        opacity: 0,
    },
    visible : {
        opacity: 1,
        transition: {
            delay: 1, 
            duration: 1.5 ,
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut',
        }
    }
}

const Home = () => {
    return (
        <motion.div className='home container'
        variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            <h2>
                <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    Welcome Pizza Boy
                </motion.h2>
            </h2>
            <Link to="/base">
                <motion.button
                    variants={buttonVarials}
                    whileHover="hover"
                >
                    Create your pizza
                </motion.button>
            </Link>
        </motion.div>
    );
}

export default Home;