import { LangContext } from "@/context/LangProvider"
import { Link1Icon, MinusCircledIcon } from "@radix-ui/react-icons"
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useState } from "react"
const plane = '/page1/icons8-paper-plane-100.png'
const resume = '/page1/icons8-resume-100.png'


export default function Connect() {
    const { text } = useContext(LangContext)
    const [isOpen, setOpen] = useState(true)

    const variants = {
        open: {
            top: '-110%',
            rotate: -360,
            transition: { duration: .5 }
        },
        close: {
            top: 0,
            rotate: 0,
            transition: { duration: 1 }
        }
    }

    return <div className='z-[100] bottom-1 right-1 lg:bottom-5 lg:right-10 fixed flex flex-row justify-center items-center'>
        <motion.button
            type='button'
            title='conn'
            className='relative z-[1] w-[50px] h-[50px] rounded-[80px] flex justify-center items-center dark:bg-white dark:text-black dark:hover:shadow-[0_0_5px_0_white] text-white bg-black'
            whileHover={{ rotate: !isOpen ? -45 : 0 }}
            onClick={() => setOpen(prev => !prev)}
        >
            {isOpen ?
                <MinusCircledIcon className='w-[70%] h-[70%]' />
                :
                <Link1Icon className='w-[70%] h-[70%]' />}
        </motion.button>
        <AnimatePresence>
            {isOpen &&
                <>
                    <motion.a
                        className='absolute w-[50px] h-[50px] rounded-[80px] flex justify-center items-center dark:bg-white dark:text-black shadow-[0_0_5px_2px_black] dark:shadow-[0_0_5px_0_white] text-white bg-[#242424]'
                        href="mailto:danilo.ochoa.hidalgo@outlook.com"
                        title='conn'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.2 }}
                        animate={{
                            left: '-110%',
                            rotate: -45,
                            transition: { duration: .2 }
                        }}
                        exit={{
                            left: 0,
                            rotate: 180,
                            transition: { duration: 2 }
                        }}
                        transition={{ x: { type: "spring", stiffness: 300, damping: 30 } }}
                    >
                        <img
                            className='absolute object-cover w-[65px] h-[65px]' src={plane} alt={text.conn.buttons[0]} title={text.conn.buttons[0]}
                            onAuxClick={() => window.open('https://icons8.com/icon/115360/sent', '_blank', 'noopener noreferrer')}
                        />
                    </motion.a>
                    <motion.a
                        className='absolute w-[50px] h-[50px] rounded-[80px] flex justify-center items-center dark:bg-white dark:text-black shadow-[0_0_5px_2px_black] dark:shadow-[0_0_5px_0_white] text-white bg-[#242424]'
                        href={text.conn.resume}
                        title='conn'
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.2 }}
                        variants={variants}
                        animate={'open'}
                        exit={'close'}
                        transition={{ x: { type: "spring", stiffness: 300, damping: 30 } }}
                    >
                        <img
                            className='absolute object-cover w-[65px] h-[65px]' src={resume} alt={text.conn.buttons[1]} title={text.conn.buttons[1]}
                            onAuxClick={() => window.open('https://icons8.com/icon/115635/resume', '_blank', 'noopener noreferrer')}
                        />
                    </motion.a>
                </>
            }
        </AnimatePresence>
    </div>
}