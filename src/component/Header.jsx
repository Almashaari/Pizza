import { motion } from 'framer-motion';

const Header = () => {
    return ( 
        <header>
            <div className="logo"></div>
            <motion.div 
                className="title"
                initial={{ y: -250 }}
                animate={{ y: -10 }}
                transition={{delay:0.2 ,type:'spring',stiffness:80}}
            >
                <h1>Pizza Boy!</h1>
            </motion.div>
        </header>
    );
}

export default Header;
