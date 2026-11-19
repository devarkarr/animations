import { motion } from 'motion/react'

export const hoverVariants = {
  hover: {
    scale: 2,
  },
  inView: {
    scale: 2,
    x: 500,
  },
  transition: {
    type: 'spring',
  },
}

const Circle = () => {
  return (
    <motion.div
      variants={hoverVariants}
      whileHover={'hover'}
      whileInView={'inView'}
      // animate={{
      //   scale: 2,
      // }}
      //   whileHover={{
      //     scale: 2,
      //   }}
      //   whileTap={{
      //     scale: 0.5,
      //   }}
      //   whileInView={{
      //     scale: 2,
      //     x: 500,
      //     //   y: -100,
      //   }}
      //   transition={{
      //     type: 'spring',
      //     //   visualDuration: 5,
      //     //   bounce: 0.5,
      //   }}
      className="size-52 bg-red-500 rounded-full"
    ></motion.div>
  )
}

export default Circle
