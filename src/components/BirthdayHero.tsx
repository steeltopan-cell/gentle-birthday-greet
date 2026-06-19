import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const NAME = "Audrey";

export default function BirthdayHero() {
  const [opened, setOpened] = useState(false);
  const { width, height } = useWindowSize();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12">
      {/* floating hearts */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute text-2xl"
          style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
        >
          {["💖", "🌸", "✨", "🎀"][i % 5]}
        </motion.span>
      ))}

      {opened && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={350}
          recycle={false}
          gravity={0.18}
          colors={["#ffb6c1", "#fcd5ce", "#d4a5ff", "#a5d8ff", "#fff1c1", "#ffc8dd"]}
        />
      )}

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="gift"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: -8 }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
              className="flex flex-col items-center gap-8"
            >
              <motion.p
                className="font-display text-4xl text-primary sm:text-5xl"
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                oiiiiiiiii~
              </motion.p>

              <motion.button
                onClick={() => setOpened(true)}
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.92 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" } }}
                aria-label="Buka kado"
                className="group relative"
              >
                <Gift />
              </motion.button>

              <motion.p
                className="rounded-full bg-card/80 px-6 py-3 text-base font-semibold text-muted-foreground shadow-soft backdrop-blur sm:text-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              >
                Klikan dulu le! 🎁
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, scale: 0.7, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.55, duration: 1 }}
              className="flex flex-col items-center gap-6 rounded-3xl bg-card/85 px-8 py-12 shadow-pop backdrop-blur-md sm:px-12"
            >
              <motion.div
                animate={{ rotate: [0, -8, 8, -4, 4, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.5 }}
                className="text-6xl"
              >
                🎂
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                className="font-display text-5xl leading-tight text-primary sm:text-7xl"
              >
                Happy Birthday,
                <br />
                <span className="bg-gradient-to-r from-[oklch(0.7_0.18_350)] via-[oklch(0.72_0.16_310)] to-[oklch(0.72_0.14_240)] bg-clip-text text-transparent">
                  {NAME}
                </span>{" "}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="max-w-md text-base text-muted-foreground sm:text-lg"
              >
                Tambah Tua dehhh. (jangan kasih liat siapa-siapa) 💖🌸 ~tpn
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpened(false)}
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
              >
                Tutup kadonya lagi 🎀
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function Gift() {
  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute inset-0 -z-10 scale-110 rounded-3xl bg-gradient-to-br from-[oklch(0.85_0.12_350)] via-[oklch(0.85_0.1_310)] to-[oklch(0.88_0.08_240)] blur-2xl opacity-70" />

      <div className="relative h-56 w-56 sm:h-64 sm:w-64">
        {/* lid */}
        <motion.div
          className="absolute -top-2 left-1/2 z-20 h-14 w-[110%] -translate-x-1/2 rounded-2xl bg-gradient-to-b from-[oklch(0.82_0.13_350)] to-[oklch(0.75_0.15_350)] shadow-soft"
          whileHover={{ y: -4, rotate: -2 }}
          transition={{ type: "spring", bounce: 0.6 }}
        />
        {/* box */}
        <div className="absolute inset-x-0 bottom-0 top-10 rounded-3xl bg-gradient-to-br from-[oklch(0.86_0.09_310)] via-[oklch(0.88_0.08_280)] to-[oklch(0.88_0.07_240)] shadow-pop" />
        {/* vertical ribbon */}
        <div className="absolute inset-y-0 left-1/2 z-10 w-8 -translate-x-1/2 bg-gradient-to-b from-[oklch(0.78_0.15_350)] to-[oklch(0.72_0.17_350)]" />
        {/* horizontal ribbon */}
        <div className="absolute inset-x-0 top-1/2 z-10 h-8 -translate-y-1/2 bg-gradient-to-r from-[oklch(0.78_0.15_350)] to-[oklch(0.72_0.17_350)]" />
        {/* bow */}
        <motion.div
          className="absolute left-1/2 top-4 z-30 -translate-x-1/2 text-5xl"
          animate={{ rotate: [-6, 6, -6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          🎀
        </motion.div>
      </div>
    </div>
  );
}
