import { motion } from 'framer-motion';

const Header = () => {
    return ( 
        <header>
            <div className="logo"></div>
            <motion.div 
                className="title"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
            >
                <h1>Pizza Boy!</h1>
            </motion.div>
        </header>
    );
}

export default Header;
