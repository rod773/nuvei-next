'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="section-wrap">
      <div className="section">
        <div className="container">
          <motion.h2
            className="heading-base"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Based on the industry's&nbsp;
            <br className="hidden-br" />
            <span className="text-blue">best infrastructure</span>
          </motion.h2>
          <motion.div
            className="description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="description-inner">
              We've built Wert based on industry leading financial partners and cutting<br />&nbsp;edge technology to ensure we provide the best services to our clients.
            </div>
          </motion.div>
        </div>

        <div className="logos-row">
          <motion.div
            className="logos-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="img-wrap nuvei-wrap">
              <img alt="Nuvei" src="/nuvei.webp" />
            </div>
            <div className="img-wrap elliptic-wrap">
              <img alt="Elliptic" src="/elliptic.webp" />
            </div>
          </motion.div>
          <motion.div
            className="logos-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <div className="img-wrap worldpay-wrap">
              <img alt="WorldPay" src="/worldpay.webp" />
            </div>
            <div className="img-wrap sardine-wrap">
              <img alt="Sardine" src="/sardine.webp" />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="logos-bottom"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          <div className="logos-bottom-inner">
            <img alt="Finery Markets" src="/finerymarkets.svg" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
