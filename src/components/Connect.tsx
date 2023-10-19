import { Link1Icon } from "@radix-ui/react-icons"
import { motion } from 'framer-motion'

export default function Connect() {
    return <div className='z-[100] bottom-5 right-10 fixed flex flex-row justify-center items-center'>
        <motion.button
            type='button'
            title='conn'
            className='w-[50px] h-[50px] rounded-[80px] flex justify-center items-center dark:bg-white dark:text-black dark:shadow-[0_0_5px_0_white] text-white bg-[#242424]'
            whileHover={{ rotate: -45 }}
        >
            <Link1Icon className='w-[70%] h-[70%]' />
        </motion.button>
    </div>
}