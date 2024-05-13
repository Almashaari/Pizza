import { motion } from 'framer-motion';

const Header = () => {

    const containerVariants = {
        hidden : {
            y: -250
        },
        visible : {
            y: -10,
            transition: {
                delay:0.2 ,
                type:'spring',
                stiffness:80
            }
        }


    }
    return ( 
        <header>
            <div className="logo"></div>
            <motion.div 
                className="title"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <h1>Pizza Boy!</h1>
            </motion.div>
        </header>
    );
}

export default Header;
