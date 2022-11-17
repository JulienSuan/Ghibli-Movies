import React from 'react'
import { motion } from 'framer-motion'

const animations = {
    initial: {opacity: 1, scale: 0},
    animate: {opacity: 1, scale: 1},
    exit: {opacity: 1, scale: 0}
}

export default function AnimatePage({children}) {
  return (
    <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition="duration: .6"
        >
        {children}
    </motion.div>
  )
}
