import Layout from "@/site/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Eye, Activity, Glasses, Syringe, LayoutGrid,
  CheckCircle2, ArrowRight, MessageCircle, Sparkles,
} from "lucide-react";

const WHATSAPP = "https://wa.me/2349017758165";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const slideIn = (dir: "left" | "right") => ({
  hidden: { opacity: 0, x: dir === "left" ? -60 : 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
});

const features = [
  {
    icon: Eye,
    title: "One record for every exam and refraction",
    promise:
      "Stop reconstructing a patient's history from memory or a paper folder — it's all on one timeline, trending automatically.",
    detail:
      "Captures visual acuity (aided/unaided/pinhole), IOP with tonometry method, pupils, anterior segment, fundus, C/D ratio and dilation flag. Full refraction per eye — sphere, cylinder, axis, add, prism, PD — across distance, reading, bifocal, progressive, computer and contact lens prescription types, with issue and expiry dates tracked.",
  },
  {
    icon: Activity,
    title: "Diagnostic results that plot themselves",
    promise:
      "Catch slow changes — like early glaucoma progression — before they become obvious in a single visit.",
    detail:
      "Log OCT (macula, RNFL), Humphrey visual fields, fundus photography, fluorescein angiography, corneal topography, pachymetry, biometry/IOL Master, B-scan and specular microscopy, with file uploads attached to findings. IOP, C/D ratio, RNFL and MD/PSD trend automatically, split OD/OS. A single reports view groups every fundus, OCT and field result per patient.",
  },
  {
    icon: Glasses,
    title: "Dispensing that tracks itself",
    promise: "Know the status of every fitting and order without opening a chat thread.",
    detail:
      "Contact lens fittings record brand, type, modality, base curve, diameter, powers and fit assessment, with aftercare check dates scheduled automatically from the fitting date. Optical orders track frame, lens type, coatings and lab routing through ordered → at lab → ready → collected, against promised and delivery dates.",
  },
  {
    icon: Syringe,
    title: "Surgery bookings with nothing left loose",
    promise: "Everything surgery day needs is attached to the booking, not scattered across folders.",
    detail:
      "Book by procedure (phaco, trabeculectomy, YAG, pterygium, anti-VEGF injections and others), eye side and theatre. Biometry-based IOL power selection, pre-op checklists and eye-specific consent forms are tracked against the same record, with outcome notes after.",
  },
  {
    icon: LayoutGrid,
    title: "The rest of the clinic, not bolted on separately",
    promise: "One system instead of three or four you have to keep in sync.",
    detail:
      "Appointments and waiting list, invoicing and payments, inventory for drops, lenses and frames, pharmacy prescriptions, staff and schedules, and analytics across the whole clinic.",
  },
];

const plans = [
  { price: "₦15,000", period: "every 3 months" },
  { price: "₦30,000", period: "every 6 months", highlight: true },
  { price: "₦60,000", period: "every 12 months" },
];

const included = [
  "Full clinical exam and refraction records",
  "Diagnostic imaging uploads with automatic trend charts",
  "Contact lens fitting and optical order tracking",
  "Surgery booking, biometry/IOL, consent tracking",
  "Appointments, invoicing, inventory, staff scheduling, analytics",
];

const EyeClinics = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--clinic-navy))] via-[hsl(var(--clinic-navy-light))] to-[hsl(var(--clinic-teal))] py-28 text-primary-foreground">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-primary-foreground/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-20 h-[24rem] w-[24rem] rounded-full bg-primary-foreground/10 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative mx-auto max-w-4xl px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur"
          >
            <Eye className="h-3.5 w-3.5" /> Clinexus for Eye Clinics
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            Your patients trust you with their sight. Your systems shouldn't make that harder.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/85"
          >
            A missing IOP trend, a forgotten contact lens aftercare check, an optical order tracked in a
            WhatsApp thread — none of it is dramatic on its own. Together, it's what keeps a well-run clinic
            from feeling like one.
          </motion.p>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.25 }}
            className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/70"
          >
            Clinexus is a clinic management system built specifically around eye care — exams, refraction,
            diagnostics, dispensing, surgery and the everyday admin, in one place.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" variant="secondary" asChild className="group">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Talk to us on WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/features">
                See the full feature list
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Credibility */}
      <section className="border-b border-border bg-accent/40 py-14">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="container mx-auto max-w-3xl px-4 text-center text-lg text-accent-foreground"
        >
          Clinexus is built working directly alongside dental and eye clinics — the eye clinic workflow below
          was shaped with practitioners who deal with these exact records every day, not designed in the
          abstract and hoped to fit.
        </motion.p>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16 max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
              <Sparkles className="h-3.5 w-3.5" /> What's actually in it
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              What it does, specifically
            </h2>
          </motion.div>

          <div className="space-y-8">
            {features.map((f, i) => (
              <motion.article
                key={f.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={slideIn(i % 2 === 0 ? "left" : "right")}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-xl md:p-10"
              >
                <span className="absolute right-6 top-4 text-6xl font-bold text-muted/60 md:text-7xl">
                  {i + 1}
                </span>
                <div className="relative flex flex-col gap-6 md:flex-row">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <f.icon className="h-7 w-7" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground md:text-2xl">{f.title}</h3>
                    <p className="text-base font-medium text-primary">{f.promise}</p>
                    <p className="text-muted-foreground">{f.detail}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto mb-14 max-w-2xl space-y-4 text-center"
          >
            <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
              Getting started
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              One plan, everything above included
            </h2>
            <p className="text-lg text-muted-foreground">
              No tier that holds back diagnostics or surgery tracking until you pay more — clinical,
              dispensing, diagnostics, surgery and admin are all included from day one. Choose the billing
              period that suits your clinic.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((p, i) => (
              <motion.div
                key={p.period}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className={`rounded-2xl border p-8 text-center shadow-sm transition-shadow hover:shadow-xl ${
                  p.highlight
                    ? "border-primary bg-card ring-2 ring-primary/30"
                    : "border-border bg-card"
                }`}
              >
                <div className="text-4xl font-bold text-foreground">{p.price}</div>
                <div className="mt-2 text-sm uppercase tracking-wide text-muted-foreground">{p.period}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-card p-8"
          >
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Included at every tier
            </h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--clinic-teal))] to-[hsl(var(--clinic-navy))] py-24 text-primary-foreground">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary-foreground/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="container relative mx-auto max-w-3xl px-4 text-center"
        >
          <span className="inline-block rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            Next step
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
            See it against your own patient records
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/85">
            Tell us how your clinic currently handles exams, dispensing and surgery bookings, and we'll show
            you exactly how Clinexus fits in — using your workflow, not a generic demo.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Talk to us on WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/demo">
                Try demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="mt-10 text-sm text-primary-foreground/70">
            Clinexus — clinic management built for how you actually work.
          </p>
        </motion.div>
      </section>
    </Layout>
  );
};

export default EyeClinics;
