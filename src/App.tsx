import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Phone,
  MapPin,
  Star,
  Award,
  Sparkles,
  HeartPulse,
  Trophy,
  Hand,
  Waves,
  Zap,
  Activity,
  Footprints,
  Dumbbell,
  Bone,
  ShieldPlus,
  Bike,
  Stethoscope,
  Clock,
  Facebook,
  Quote,
} from "lucide-react";
import logo from "@/assets/logo.png";
import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";
import clinic3 from "@/assets/clinic-3.jpg";
import clinicPilates from "@/assets/clinic-pilates.jpg";
import team from "@/assets/team.jpg";

const PHONE = "2105137084";
const PHONE_DISPLAY = "21 0513 7084";
const ADDRESS = "Αθανάτων 35, Αθήνα 10443, Σεπόλια";
const FB = "https://www.facebook.com/share/1EUL14R1tc/?mibextid=wwXIfr";
const MAPS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

const reasons = [
  {
    icon: Award,
    title: "Εξειδικευμένη Προσέγγιση",
    desc: "Εξατομικευμένο πλάνο θεραπείας από έμπειρους φυσικοθεραπευτές.",
  },
  {
    icon: Sparkles,
    title: "Σύγχρονος Εξοπλισμός",
    desc: "Τεχνολογίες αιχμής: TECAR, Κρουστικοί Υπέρηχοι, Πελματογράφημα.",
  },
  {
    icon: HeartPulse,
    title: "Άμεση Ανακούφιση Πόνου",
    desc: "Αποτελεσματικά πρωτόκολλα με γρήγορα και διαρκή αποτελέσματα.",
  },
  {
    icon: Trophy,
    title: "Εξαιρετικές Κριτικές",
    desc: "Εκατοντάδες ικανοποιημένοι ασθενείς μας εμπιστεύονται.",
  },
];

const services = [
  { icon: Hand, title: "Manual Therapy", desc: "Ειδικές τεχνικές χειρισμού για ταχύτατη ανακούφιση." },
  { icon: Waves, title: "Κρουστικοί Υπέρηχοι", desc: "Shockwave θεραπεία για τενοντοπάθειες & χρόνιο πόνο." },
  { icon: Zap, title: "Θεραπείες TECAR", desc: "Διαθερμία υψηλής συχνότητας για βαθιά αποκατάσταση." },
  { icon: Activity, title: "Clinical Pilates", desc: "Θεραπευτικό Pilates για ενδυνάμωση & σταθεροποίηση." },
  { icon: Footprints, title: "Πελματογράφημα", desc: "Ανάλυση πέλματος και εξατομικευμένοι πάτοι." },
  { icon: Dumbbell, title: "Θεραπευτική Άσκηση", desc: "Προγράμματα ενδυνάμωσης και κινητοποίησης." },
  { icon: Bone, title: "Αυχενικό Σύνδρομο", desc: "Ολοκληρωμένη αντιμετώπιση αυχεναλγίας & πονοκεφάλων." },
  { icon: ShieldPlus, title: "Οσφυαλγία / Μέση", desc: "Θεραπεία οσφυαλγίας, δισκοπάθειας και ισχιαλγίας." },
  { icon: Bike, title: "Αθλητικοί Τραυματισμοί", desc: "Επιστροφή στην αθλητική δράση με ασφάλεια." },
  { icon: Stethoscope, title: "Μετεγχειρητική Αποκατάσταση", desc: "Εξειδικευμένα προγράμματα μετά από επεμβάσεις." },
];

const reviews = [
  {
    name: "Μαρία Κ.",
    text: "Εξαιρετικός επαγγελματισμός και άμεση βελτίωση. Ένιωσα τη διαφορά από την πρώτη συνεδρία.",
  },
  {
    name: "Γιώργος Π.",
    text: "Άψογη εξυπηρέτηση και ανθρώπινη προσέγγιση. Τους συστήνω ανεπιφύλακτα.",
  },
  {
    name: "Ελένη Δ.",
    text: "Σύγχρονος χώρος και αποτελεσματικές θεραπείες. Το καλύτερο φυσικοθεραπευτήριο στα Σεπόλια.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Physiomerimna" className="h-10 w-auto md:h-12" />
            <span className="hidden font-serif text-lg font-semibold text-primary sm:block md:text-xl">
              Physiomerimna
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#why" className="transition-colors hover:text-primary">Γιατί Εμάς</a>
            <a href="#services" className="transition-colors hover:text-primary">Υπηρεσίες</a>
            <a href="#about" className="transition-colors hover:text-primary">Σχετικά</a>
            <a href="#reviews" className="transition-colors hover:text-primary">Κριτικές</a>
            <a href="#contact" className="transition-colors hover:text-primary">Επικοινωνία</a>
          </nav>
          <Button asChild size="sm" className="rounded-full">
            <a href={`tel:+30${PHONE}`}>
              <Phone className="mr-2 h-4 w-4" />Κάλεσε
            </a>
          </Button>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-hero-gradient pb-20 pt-24 md:pb-32 md:pt-32">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${clinic1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
        />
        <div className="absolute -right-40 -top-40 h-96 w-96 animate-float rounded-full bg-white/10 blur-3xl" />
        <div
          className="absolute -bottom-40 -left-40 h-96 w-96 animate-float rounded-full bg-accent/20 blur-3xl"
          style={{ animationDelay: "2s" }}
        />

        <div className="container relative mx-auto px-4 text-center text-white">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm animate-fade-in">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">4.8/5 — 25+ Google Reviews</span>
          </div>
          <h1 className="mb-6 font-serif text-5xl font-bold text-balance animate-fade-up md:text-7xl lg:text-8xl">
            Physiomerimna
          </h1>
          <p
            className="mx-auto mb-10 max-w-2xl text-balance text-lg leading-relaxed text-white/85 animate-fade-up md:text-xl"
            style={{ animationDelay: "0.1s" }}
          >
            Εξειδικευμένες θεραπείες για πόνο, τραυματισμούς και αποκατάσταση με σύγχρονες τεχνικές και προσωπική φροντίδα.
          </p>
          <div
            className="flex flex-col items-center justify-center gap-4 animate-fade-up sm:flex-row"
            style={{ animationDelay: "0.2s" }}
          >
            <Button asChild size="lg" className="h-14 rounded-full bg-white px-8 text-base text-primary shadow-glow hover:bg-white/90">
              <a href={`tel:+30${PHONE}`}>
                <Phone className="mr-2 h-5 w-5" />Κάλεσε Τώρα
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 rounded-full border-white/40 bg-transparent px-8 text-base text-white hover:bg-white/10 hover:text-white">
              <a href={MAPS} target="_blank" rel="noopener">
                <MapPin className="mr-2 h-5 w-5" />Οδηγίες Χάρτη
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="why" className="bg-soft-gradient py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Γιατί Εμάς</p>
            <h2 className="font-serif text-4xl font-bold text-balance text-primary md:text-5xl">
              Η διαφορά μας στη φροντίδα σας
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <Card key={index} className="group border-border/50 bg-card-gradient p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary">
                  <reason.icon className="h-7 w-7 text-primary transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold text-primary">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{reason.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Υπηρεσίες</p>
            <h2 className="font-serif text-4xl font-bold text-balance text-primary md:text-5xl">
              Ολοκληρωμένη Φυσικοθεραπεία
            </h2>
            <p className="mt-4 text-muted-foreground">Σύγχρονες μέθοδοι και εξειδικευμένα πρωτόκολλα για κάθε ανάγκη.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden border-border/50 bg-white p-6 transition-all duration-500 hover:border-accent hover:shadow-card-soft">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-500 group-hover:scale-x-100" />
                <service.icon className="mb-4 h-9 w-9 text-accent transition-colors group-hover:text-primary" strokeWidth={1.5} />
                <h3 className="mb-2 font-serif text-lg font-semibold text-primary">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft-gradient py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[clinic1, clinic2, clinic3, clinicPilates].map((src, index) => (
              <div key={index} className="group aspect-square overflow-hidden rounded-2xl shadow-card-soft">
                <img
                  src={src}
                  alt={`Χώρος Physiomerimna ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Κριτικές</p>
            <h2 className="font-serif text-4xl font-bold text-balance text-primary md:text-5xl">
              Τι Λένε Οι Ασθενείς Μας
            </h2>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-soft-gradient px-6 py-3">
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-primary">4.8 / 5</span>
              <span className="text-sm text-muted-foreground">· 25+ Google Reviews</span>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <Card key={index} className="border-border/50 bg-card-gradient p-8 transition-all duration-500 hover:shadow-elegant">
                <Quote className="mb-4 h-10 w-10 text-accent/40" />
                <p className="mb-6 leading-relaxed text-foreground/80 italic">&quot;{review.text}&quot;</p>
                <div className="flex items-center justify-between border-t border-border/50 pt-4">
                  <span className="font-semibold text-primary">{review.name}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-soft-gradient py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <img src={team} alt="Η ομάδα του Physiomerimna" className="w-full rounded-3xl shadow-elegant" loading="lazy" />
              <div className="absolute -bottom-6 -right-6 hidden max-w-[200px] rounded-2xl border border-border bg-white p-6 shadow-elegant md:block">
                <div className="mb-1 flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-primary">4.8/5</span>
                </div>
                <p className="text-xs text-muted-foreground">Αξιολόγηση από εκατοντάδες ασθενείς</p>
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Σχετικά με εμάς</p>
              <h2 className="mb-6 font-serif text-4xl font-bold text-balance text-primary md:text-5xl">
                Φροντίδα με γνώση και ανθρωπιά
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Στο <strong className="text-primary">Physiomerimna</strong> προσφέρουμε εξατομικευμένες θεραπείες φυσικοθεραπείας με στόχο την άμεση ανακούφιση, τη σωστή αποκατάσταση και τη μακροχρόνια ευεξία.
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
                <div>
                  <div className="font-serif text-3xl font-bold text-primary">10+</div>
                  <div className="mt-1 text-xs text-muted-foreground">Χρόνια Εμπειρίας</div>
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-primary">4.8★</div>
                  <div className="mt-1 text-xs text-muted-foreground">Google Rating</div>
                </div>
                <div>
                  <div className="font-serif text-3xl font-bold text-primary">10+</div>
                  <div className="mt-1 text-xs text-muted-foreground">Υπηρεσίες</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Επικοινωνία</p>
            <h2 className="font-serif text-4xl font-bold text-balance text-primary md:text-5xl">
              Κλείστε το ραντεβού σας
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <Card className="flex items-start gap-4 p-6 transition-shadow hover:shadow-card-soft">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-primary">Διεύθυνση</h3>
                  <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                </div>
              </Card>
              <Card className="flex items-start gap-4 p-6 transition-shadow hover:shadow-card-soft">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-primary">Τηλέφωνο</h3>
                  <a href={`tel:+30${PHONE}`} className="text-sm text-muted-foreground transition-colors hover:text-accent">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </Card>
              <Card className="flex items-start gap-4 p-6 transition-shadow hover:shadow-card-soft">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-primary">Ώρες Λειτουργίας</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex justify-between gap-4"><span>Δευτέρα</span><span>8:00–10:00 π.μ., 3:00–9:00 μ.μ.</span></li>
                    <li className="flex justify-between gap-4"><span>Τρίτη</span><span>8:00–10:00 π.μ., 3:00–9:00 μ.μ.</span></li>
                    <li className="flex justify-between gap-4"><span>Τετάρτη</span><span>8:00–10:00 π.μ., 3:00–9:00 μ.μ.</span></li>
                    <li className="flex justify-between gap-4"><span>Πέμπτη</span><span>8:00–10:00 π.μ., 3:00–9:00 μ.μ.</span></li>
                    <li className="flex justify-between gap-4"><span>Παρασκευή</span><span>8:00–10:00 π.μ., 3:00–9:00 μ.μ.</span></li>
                    <li className="flex justify-between gap-4"><span>Σάββατο</span><span>Κλειστά</span></li>
                    <li className="flex justify-between gap-4"><span>Κυριακή</span><span>Κλειστά</span></li>
                  </ul>
                </div>
              </Card>
              <div className="flex gap-3 pt-2">
                <Button asChild className="h-12 flex-1 rounded-full">
                  <a href={`tel:+30${PHONE}`}>
                    <Phone className="mr-2 h-4 w-4" />Κάλεσε Τώρα
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-12 flex-1 rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                  <a href={FB} target="_blank" rel="noopener">
                    <Facebook className="mr-2 h-4 w-4" />Facebook
                  </a>
                </Button>
              </div>
            </div>
            <div className="min-h-[400px] overflow-hidden rounded-3xl border border-border shadow-elegant">
              <iframe
                title="Χάρτης Physiomerimna"
                src={MAPS_EMBED}
                className="h-full min-h-[400px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary py-12 text-white/80">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <img src={logo} alt="Physiomerimna" className="h-12 w-auto" />
                <span className="font-serif text-xl font-semibold text-white">Physiomerimna</span>
              </div>
              <p className="text-sm text-white/60">Εξειδικευμένη φυσικοθεραπεία στα Σεπόλια.</p>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-white">Επικοινωνία</h4>
              <p className="mb-2 flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />{ADDRESS}
              </p>
              <a href={`tel:+30${PHONE}`} className="flex items-center gap-2 text-sm transition-colors hover:text-accent">
                <Phone className="h-4 w-4" />{PHONE_DISPLAY}
              </a>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-white">Ακολουθήστε μας</h4>
              <a href={FB} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-sm transition-colors hover:text-accent">
                <Facebook className="h-4 w-4" />Facebook
              </a>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
            © {new Date().getFullYear()} Physiomerimna. Με την επιφύλαξη παντός δικαιώματος.
          </div>
        </div>
      </footer>
    </div>
  );
}
