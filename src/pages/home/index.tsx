import { AnimatePresence, motion } from 'motion/react'
import fireFox from '#/assets/firefox.svg'
import fireFoxPng from '#/assets/firefox.png'
import React from 'react'
import { Button } from '#/components/ui/button'
import Circle, { hoverVariants } from './components/circle'

const HomePage = () => {
  const [isVisible, setIsVisible] = React.useState(true)
  return (
    <>
      <motion.div
        className="size-20 bg-red-500"
        variants={hoverVariants}
        whileHover={'hover'}
        whileInView={'inView'}
      ></motion.div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 3 }}
            className="size-20 bg-red-500"
          />
        )}
      </AnimatePresence>

      <motion.button>
        <Button onClick={() => setIsVisible((prev) => !prev)}>
          {isVisible ? 'Hide' : 'Show'}
        </Button>
      </motion.button>
      <motion.li
        className="size-20 bg-red-500"
        initial={{ scale: 0 }}
        animate={{
          scale: [1, 0.5, 2, 1, 1.5],
          borderRadius: ['0%', '0%', '50%', '50%', '0%'],
        }}
        // initial={{ display: 'none' }}
        // animate={{ display: 'block' }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <motion.div
        style={{
          originX: 1,
          height: 200,
          width: 200,
          backgroundColor: 'blue',
        }}
      />

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 'auto' }}
        className="bg-red-500 size-20 overflow-hidden"
        transition={{
          duration: 3,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam at
        odit culpa eaque quibusdam aliquid officia excepturi error natus magnam
        doloremque iste sint maiores, dolorum ullam aperiam corporis esse?
      </motion.div>

      <Circle />

      <img
        src={fireFox}
        alt=""
        className="size-52 drop-shadow-2xl drop-shadow-blue-500 invert-100 mb-20"
      />
      <img
        src={fireFoxPng}
        alt=""
        className="size-52 drop-shadow-2xl drop-shadow-blue-500 invert-100"
      />
      {/* <div className="size-10 bg-red-500 "></div> */}
      <motion.div
        initial={{
          x: 0,
          rotate: 0,
          borderRadius: '0%',
          backgroundColor: 'red',
          //   opacity: 0,
          //   filter: 'blur(20px)',
        }}
        animate={{
          x: [0, 300, 100, 500, 200],
          rotate: 360,
          borderRadius: '50%',
          backgroundColor: 'green',
          //   opacity: 1,
          //   filter: 'blur(0px)',
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}

        className="size-20 bg-red-500"
      ></motion.div>
    </>
  )
}

export default HomePage
