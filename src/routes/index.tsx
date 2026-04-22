import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Phone, MapPin, Star, Award, Sparkles, HeartPulse, Trophy,
  Hand, Waves, Zap, Activity, Footprints, Dumbbell,
  Bone, ShieldPlus, Bike, Stethoscope, Clock, Facebook, Quote,
} from "lucide-react";
import logo from "@/assets/logo.png";
import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";
import clinic3 from "@/assets/clinic-3.jpg";
import clinicPilates from "@/assets/clinic-pilates.jpg";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Physiomerimna — Φυσικοθεραπεία Σεπόλια, Αθήνα" },
      { name: "description", content: "Εξειδικευμένες θεραπείες φυσικοθεραπείας στα Σεπόλια: Manual Therapy, TECAR, Clinical Pilates, Κρουστικοί Υπέρηχοι, Πελματογράφημα." },
    ],
  }),
  component: Index,
});

const PHONE = "2105137084";
const PHONE_DISPLAY = "21 0513 7084";
const ADDRESS = "Αθανάτων 35, Αθήνα 10443, Σεπόλια";
const FB = "https://www.facebook.com/share/1EUL14R1tc/?mibextid=wwXIfr";
const MAPS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

const reasons = [
  { icon: Award, title: "Εξειδικευμένη Προσέγγιση", desc: "Εξατομικευμένο πλάνο θεραπείας από έμπειρους φυσικοθεραπευτές." },
  { icon: Sparkles, title: "Σύγχρονος Εξοπλισμός", desc: "Τεχνολογίες αιχμής: TECAR, Κρουστικοί Υπέρηχοι, Πελματογράφημα." },
  { icon: HeartPulse, title: "Άμεση Ανακούφιση Πόνου", desc: "Αποτελεσματικά πρωτόκολλα με γρήγορα και διαρκή αποτελέσματα." },
  { icon: Trophy, title: "Εξαιρετικές Κριτικές", desc: "Εκατοντάδες ικανοποιημένοι ασθενείς μας εμπιστεύονται." },
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
  { name: "Μαρία Κ.", text: "Εξαιρετικός επαγγελματισμός και άμεση βελτίωση. Ένιωσα τη διαφορά από την πρώτη συνεδρία." },
  { name: "Γιώργος Π.", text: "Άψογη εξυπηρέτηση και ανθρώπινη προσέγγιση. Τους συστήνω ανεπιφύλακτα." },
  { name: "Ελένη Δ.", text: "Σύγχρονος χώρος και αποτελεσματικές θεραπείες. Το καλύτερο φυσικοθεραπευτήριο στα Σεπόλια." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Physiomerimna" className="h-10 md:h-12 w-auto" />
            <span className="hidden sm:block font-serif text-lg md:text-xl font-semibold text-primary">Physiomerimna</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#why" className="hover:text-primary transition-colors">Γιατί Εμάς</a>
            <a href="#services" className="hover:text-primary transition-colors">Υπηρεσίες</a>
            <a href="#about" className="hover:text-primary transition-colors">Σχετικά</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Κριτικές</a>
            <a href="#contact" className="hover:text-primary transition-colors">Επικοινωνία</a>
          </nav>
          <Button asChild size="sm" className="rounded-full">
            <a href={`tel:+30${PHONE}`}><Phone className="w-4 h-4 mr-2" />Κάλεσε</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${clinic1})`, backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'overlay' }} />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="container relative mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">4.8/5 — 25+ Google Reviews</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance animate-fade-up">
            Physiomerimna
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/85 leading-relaxed text-balance animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Εξειδικευμένες θεραπείες για πόνο, τραυματισμούς και αποκατάσταση με σύγχρονες τεχνικές και προσωπική φροντίδα.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 shadow-glow text-base h-14 px-8">
              <a href={`tel:+30${PHONE}`}><Phone className="w-5 h-5 mr-2" />Κάλεσε Τώρα</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white text-base h-14 px-8">
              <a href={MAPS} target="_blank" rel="noopener"><MapPin className="w-5 h-5 mr-2" />Οδηγίες Χάρτη</a>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-20 md:py-28 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Γιατί Εμάς</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance">Η διαφορά μας στη φροντίδα σας</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <Card key={i} className="group p-8 bg-card-gradient border-border/50 hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <r.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Υπηρεσίες</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance">Ολοκληρωμένη Φυσικοθεραπεία</h2>
            <p className="mt-4 text-muted-foreground">Σύγχρονες μέθοδοι και εξειδικευμένα πρωτόκολλα για κάθε ανάγκη.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {services.map((s, i) => (
              <Card key={i} className="group relative p-6 bg-white border-border/50 hover:border-accent hover:shadow-card-soft transition-all duration-500 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <s.icon className="w-9 h-9 text-accent mb-4 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-semibold text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-12 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[clinic1, clinic2, clinic3, clinicPilates].map((src, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-card-soft group">
                <img src={src} alt={`Χώρος Physiomerimna ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Κριτικές</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance">Τι Λένε Οι Ασθενείς Μας</h2>
            <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-soft-gradient border border-border">
              <div className="flex">{[...Array(5)].map((_,i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</div>
              <span className="font-semibold text-primary">4.8 / 5</span>
              <span className="text-muted-foreground text-sm">· 25+ Google Reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <Card key={i} className="p-8 bg-card-gradient border-border/50 hover:shadow-elegant transition-all duration-500">
                <Quote className="w-10 h-10 text-accent/40 mb-4" />
                <p className="text-foreground/80 leading-relaxed mb-6 italic">"{r.text}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="font-semibold text-primary">{r.name}</span>
                  <div className="flex">{[...Array(5)].map((_,j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-28 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <img src={team} alt="Η ομάδα του Physiomerimna" className="rounded-3xl shadow-elegant w-full" />
              <div className="absolute -bottom-6 -right-6 hidden md:block bg-white rounded-2xl p-6 shadow-elegant border border-border max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-primary">4.8/5</span>
                </div>
                <p className="text-xs text-muted-foreground">Αξιολόγηση από εκατοντάδες ασθενείς</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Σχετικά με εμάς</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Φροντίδα με γνώση και ανθρωπιά</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Στο <strong className="text-primary">Physiomerimna</strong> προσφέρουμε εξατομικευμένες θεραπείες φυσικοθεραπείας με στόχο την άμεση ανακούφιση, τη σωστή αποκατάσταση και τη μακροχρόνια ευεξία.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div><div className="font-serif text-3xl font-bold text-primary">10+</div><div className="text-xs text-muted-foreground mt-1">Χρόνια Εμπειρίας</div></div>
                <div><div className="font-serif text-3xl font-bold text-primary">4.8★</div><div className="text-xs text-muted-foreground mt-1">Google Rating</div></div>
                <div><div className="font-serif text-3xl font-bold text-primary">10+</div><div className="text-xs text-muted-foreground mt-1">Υπηρεσίες</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Επικοινωνία</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance">Κλείστε το ραντεβού σας</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Card className="p-6 flex items-start gap-4 hover:shadow-card-soft transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Διεύθυνση</h3>
                  <p className="text-muted-foreground text-sm">{ADDRESS}</p>
                </div>
              </Card>
              <Card className="p-6 flex items-start gap-4 hover:shadow-card-soft transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Τηλέφωνο</h3>
                  <a href={`tel:+30${PHONE}`} className="text-muted-foreground text-sm hover:text-accent transition-colors">{PHONE_DISPLAY}</a>
                </div>
              </Card>
              <Card className="p-6 flex items-start gap-4 hover:shadow-card-soft transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Ώρες Λειτουργίας</h3>
                  <ul className="text-muted-foreground text-sm space-y-1">
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
                <Button asChild className="flex-1 rounded-full h-12">
                  <a href={`tel:+30${PHONE}`}><Phone className="w-4 h-4 mr-2" />Κάλεσε Τώρα</a>
                </Button>
                <Button asChild variant="outline" className="flex-1 rounded-full h-12 border-primary text-primary hover:bg-primary hover:text-white">
                  <a href={FB} target="_blank" rel="noopener"><Facebook className="w-4 h-4 mr-2" />Facebook</a>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-elegant border border-border min-h-[400px]">
              <iframe
                title="Χάρτης Physiomerimna"
                src={MAPS_EMBED}
                className="w-full h-full min-h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-white/80 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Physiomerimna" className="h-12 w-auto" />
                <span className="font-serif text-xl font-semibold text-white">Physiomerimna</span>
              </div>
              <p className="text-sm text-white/60">Εξειδικευμένη φυσικοθεραπεία στα Σεπόλια.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Επικοινωνία</h4>
              <p className="text-sm flex items-start gap-2 mb-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" />{ADDRESS}</p>
              <a href={`tel:+30${PHONE}`} className="text-sm flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4" />{PHONE_DISPLAY}</a>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Ακολουθήστε μας</h4>
              <a href={FB} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-sm hover:text-accent transition-colors"><Facebook className="w-4 h-4" />Facebook</a>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/50">
            © {new Date().getFullYear()} Physiomerimna. Με την επιφύλαξη παντός δικαιώματος.
          </div>
        </div>
      </footer>
    </div>
  );
}
