import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mt-2">
            © 2025 All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}