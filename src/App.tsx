import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
  ArrowRight,
  CheckCircle2,
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
  { icon: Award, title: "Εξειδικευμένη Προσέγγιση", desc: "Εξατομικευμένο πλάνο θεραπείας από έμπειρους φυσικοθεραπευτές." },
  { icon: Sparkles, title: "Σύγχρονος Εξοπλισμός", desc: "Τεχνολογίες αιχμής: TECAR, Κρουστικοί Υπέρηχοι, Πελματογράφημα." },
  { icon: HeartPulse, title: "Άμεση Ανακούφιση Πόνου", desc: "Αποτελεσματικά πρωτόκολλα με γρήγορα και διαρκή αποτελέσματα." },
  { icon: Trophy, title: "Εξαιρετικές Κριτικές", desc: "Εκατοντάδες ικανοποιημένοι ασθενείς μας εμπιστεύονται." },
];

type Service = {
  icon: typeof Hand;
  title: string;
  desc: string;
  intro: string;
  paragraphs: string[];
  benefits: string[];
  indications: string[];
};

const services: Service[] = [
  {
    icon: Hand,
    title: "Manual Therapy",
    desc: "Ειδικές τεχνικές χειρισμού για ταχύτατη ανακούφιση.",
    intro: "Εξειδικευμένες τεχνικές χειρισμού για την αντιμετώπιση μυοσκελετικών παθήσεων με άμεσα και διαρκή αποτελέσματα.",
    paragraphs: [
      "Το Manual Therapy αποτελεί έναν σύγχρονο τρόπο αντιμετώπισης μυοσκελετικών παθήσεων που εφαρμόζεται διεθνώς εδώ και δεκαετίες. Με τον όρο εννοούμε τις εξειδικευμένες τεχνικές και χειρισμούς αποκατάστασης που εκτελούνται αποκλειστικά με τα χέρια του φυσικοθεραπευτή.",
      "Στόχος είναι η αποκατάσταση της φυσιολογικής κίνησης των αρθρώσεων, η μείωση του πόνου, η χαλάρωση των μυϊκών σπασμών και η βελτίωση της λειτουργικότητας. Κάθε συνεδρία είναι εξατομικευμένη και προσαρμοσμένη στις ανάγκες του ασθενή.",
    ],
    benefits: [
      "Άμεση μείωση του πόνου",
      "Βελτίωση κινητικότητας αρθρώσεων",
      "Χαλάρωση μυϊκών σπασμών",
      "Επανέκταση μυϊκών ινών",
    ],
    indications: ["Αυχεναλγία", "Οσφυαλγία", "Πονοκέφαλοι τάσης", "Παθήσεις ώμου", "Δυσλειτουργίες αρθρώσεων"],
  },
  {
    icon: Waves,
    title: "Κρουστικοί Υπέρηχοι",
    desc: "Shockwave θεραπεία για τενοντοπάθειες & χρόνιο πόνο.",
    intro: "Η θεραπεία Shockwave αποτελεί την πιο αποτελεσματική μέθοδο για την αντιμετώπιση χρόνιων τενοντοπαθειών.",
    paragraphs: [
      "Οι κρουστικοί υπέρηχοι (Shockwave Therapy) είναι ηχητικά κύματα υψηλής ενέργειας που εφαρμόζονται στην πάσχουσα περιοχή. Διεγείρουν τη μικροκυκλοφορία, ενεργοποιούν τους μηχανισμούς αυτοεπούλωσης και διασπούν επασβεστώσεις.",
      "Είναι ιδανικοί για χρόνιες παθήσεις που δεν ανταποκρίνονται σε συμβατικές θεραπείες. Συνήθως απαιτούνται 3 έως 6 συνεδρίες με μεσοδιαστήματα μίας εβδομάδας.",
    ],
    benefits: [
      "Άμεση δράση σε χρόνιες τενοντοπάθειες",
      "Διάσπαση επασβεστώσεων",
      "Διέγερση κυτταρικής αναγέννησης",
      "Μη επεμβατική μέθοδος",
    ],
    indications: ["Πελματιαία απονευρωσίτιδα", "Επικονδυλίτιδα (tennis elbow)", "Τενοντίτιδα Αχιλλείου", "Σύνδρομο υπακρωμιακής προστριβής", "Επασβεστώσεις"],
  },
  {
    icon: Zap,
    title: "Θεραπείες TECAR",
    desc: "Διαθερμία υψηλής συχνότητας για βαθιά αποκατάσταση.",
    intro: "Καινοτομία στο χώρο της αποκατάστασης που βασίζεται στην εκπομπή ραδιοκυμάτων υψηλής συχνότητας.",
    paragraphs: [
      "Η θεραπεία TECAR είναι μία από τις πιο σύγχρονες τεχνολογίες στην αποκατάσταση. Παράγει ενδογενώς θερμότητα μέσω ραδιοκυμάτων, ενεργοποιώντας τους φυσικούς μηχανισμούς αυτοίασης του οργανισμού σε βάθος.",
      "Επιταχύνει σημαντικά τους χρόνους αποκατάστασης τόσο σε οξείες όσο και σε χρόνιες παθήσεις, μειώνει το οίδημα, ανακουφίζει από τον πόνο και επιταχύνει την ιστική αναγέννηση.",
    ],
    benefits: [
      "Επιτάχυνση χρόνου αποκατάστασης",
      "Άμεση ανακούφιση πόνου",
      "Μείωση οιδήματος και φλεγμονής",
      "Βαθιά ιστική θέρμανση",
    ],
    indications: ["Αθλητικοί τραυματισμοί", "Θλάσεις & διαστρέμματα", "Χρόνιες τενοντοπάθειες", "Μετεγχειρητική αποκατάσταση", "Αρθρίτιδες"],
  },
  {
    icon: Activity,
    title: "Clinical Pilates",
    desc: "Θεραπευτικό Pilates για ενδυνάμωση & σταθεροποίηση.",
    intro: "Εξειδικευμένη μορφή Pilates με κλινική προσέγγιση για αποκατάσταση και πρόληψη τραυματισμών.",
    paragraphs: [
      "Το Clinical Pilates συνδυάζει τις αρχές του παραδοσιακού Pilates με τη γνώση της φυσικοθεραπείας. Επικεντρώνεται στην ενεργοποίηση των εν τω βάθει σταθεροποιητικών μυών, στη βελτίωση της στάσης και στη σωστή νευρομυϊκή λειτουργία.",
      "Τα προγράμματα είναι πλήρως εξατομικευμένα και πραγματοποιούνται είτε σε ατομικές είτε σε ολιγομελείς συνεδρίες υπό την επίβλεψη πιστοποιημένου φυσικοθεραπευτή.",
    ],
    benefits: [
      "Ενίσχυση κορμού (core stability)",
      "Βελτίωση στάσης σώματος",
      "Πρόληψη τραυματισμών",
      "Αύξηση ευλυγισίας και ελέγχου",
    ],
    indications: ["Χρόνια οσφυαλγία", "Σκολίωση & δυσμορφίες σπονδυλικής στήλης", "Μετεγχειρητική αποκατάσταση", "Προετοιμασία εγκυμοσύνης", "Αθλητική απόδοση"],
  },
  {
    icon: Footprints,
    title: "Πελματογράφημα",
    desc: "Ανάλυση πέλματος και εξατομικευμένοι πάτοι.",
    intro: "Σύγχρονη ηλεκτρονική ανάλυση της κατανομής των πιέσεων του πέλματος για ορθοπεδικά πέλματα κατά παραγγελία.",
    paragraphs: [
      "Το πελματογράφημα είναι μια μη επεμβατική εξέταση που καταγράφει με ακρίβεια τις πιέσεις του πέλματος, τόσο σε στατική όσο και σε δυναμική θέση (κατά τη βάδιση).",
      "Με βάση τα αποτελέσματα κατασκευάζονται εξατομικευμένα ορθοπεδικά πέλματα που διορθώνουν την κατανομή του βάρους, ανακουφίζουν τον πόνο και προλαμβάνουν τραυματισμούς σε γόνατα, ισχία και σπονδυλική στήλη.",
    ],
    benefits: [
      "Ακριβής διάγνωση εμβιομηχανικών προβλημάτων",
      "Εξατομικευμένα ορθοπεδικά πέλματα",
      "Πρόληψη τραυματισμών",
      "Ανακούφιση από πόνους ποδιών, γονάτων, μέσης",
    ],
    indications: ["Πλατυποδία", "Κοιλοποδία", "Πελματιαία απονευρωσίτιδα", "Πόνοι γονάτων από βάδιση", "Διαφορά μήκους κάτω άκρων"],
  },
  {
    icon: Dumbbell,
    title: "Θεραπευτική Άσκηση",
    desc: "Προγράμματα ενδυνάμωσης και κινητοποίησης.",
    intro: "Επιστημονικά σχεδιασμένα προγράμματα άσκησης για αποκατάσταση, ενδυνάμωση και πρόληψη.",
    paragraphs: [
      "Η θεραπευτική άσκηση αποτελεί τον ακρογωνιαίο λίθο κάθε ολοκληρωμένου προγράμματος αποκατάστασης. Στοχεύει στην αποκατάσταση της δύναμης, της ευλυγισίας, της ισορροπίας και της λειτουργικότητας.",
      "Κάθε πρόγραμμα σχεδιάζεται εξατομικευμένα από τον φυσικοθεραπευτή με βάση τη διάγνωση, την ηλικία, το επίπεδο φυσικής κατάστασης και τους προσωπικούς στόχους του ασθενή.",
    ],
    benefits: [
      "Επανάκτηση μυϊκής δύναμης",
      "Βελτίωση εύρους κίνησης",
      "Ενίσχυση ισορροπίας & συντονισμού",
      "Πρόληψη επανατραυματισμού",
    ],
    indications: ["Μετά από κατάγματα", "Μετεγχειρητικά", "Χρόνιοι πόνοι", "Νευρολογικές παθήσεις", "Ηλικιωμένοι"],
  },
  {
    icon: Bone,
    title: "Αυχενικό Σύνδρομο",
    desc: "Ολοκληρωμένη αντιμετώπιση αυχεναλγίας & πονοκεφάλων.",
    intro: "Εξειδικευμένη προσέγγιση για την αντιμετώπιση αυχεναλγίας, αυχενικού πονοκεφάλου και ζαλάδων αυχενικής αιτιολογίας.",
    paragraphs: [
      "Το αυχενικό σύνδρομο εκδηλώνεται με πόνο στον αυχένα, πονοκεφάλους, ζαλάδες, ίλιγγο, μούδιασμα στα χέρια ή πόνο στις ωμοπλάτες. Συνήθως οφείλεται σε κακή στάση, παρατεταμένη χρήση Η/Υ, στρες ή τραυματισμό.",
      "Η αντιμετώπιση συνδυάζει manual therapy, TECAR, ασκήσεις σταθεροποίησης και εκπαίδευση στη σωστή στάση εργασίας για άμεση και μακροχρόνια ανακούφιση.",
    ],
    benefits: [
      "Άμεση ανακούφιση πόνου",
      "Εξάλειψη πονοκεφάλων",
      "Βελτίωση κινητικότητας αυχένα",
      "Διόρθωση στάσης σώματος",
    ],
    indications: ["Αυχεναλγία", "Πονοκέφαλοι τάσης", "Αυχενικός ίλιγγος", "Σύνδρομο θωρακικής εξόδου", "Δισκοπάθεια αυχενικής μοίρας"],
  },
  {
    icon: ShieldPlus,
    title: "Οσφυαλγία / Μέση",
    desc: "Θεραπεία οσφυαλγίας, δισκοπάθειας και ισχιαλγίας.",
    intro: "Ολοκληρωμένα πρωτόκολλα για τον πόνο στη μέση — από την οξεία οσφυαλγία έως τη χρόνια δισκοπάθεια.",
    paragraphs: [
      "Η οσφυαλγία είναι ο πιο συχνός μυοσκελετικός πόνος και επηρεάζει 8 στους 10 ανθρώπους κάποια στιγμή στη ζωή τους. Μπορεί να οφείλεται σε δισκοκήλη, δισκοπάθεια, σπονδυλολίσθηση, μυϊκό σπασμό ή κακή στάση.",
      "Συνδυάζουμε manual therapy, TECAR, κρουστικούς υπερήχους και θεραπευτική άσκηση για άμεση ανακούφιση και μακροχρόνια αποκατάσταση χωρίς υποτροπές.",
    ],
    benefits: [
      "Άμεση μείωση πόνου",
      "Αποσυμπίεση μεσοσπονδύλιων δίσκων",
      "Ενδυνάμωση κορμού",
      "Πρόληψη υποτροπών",
    ],
    indications: ["Οξεία & χρόνια οσφυαλγία", "Δισκοκήλη", "Ισχιαλγία", "Σπονδυλολίσθηση", "Στένωση σπονδυλικού σωλήνα"],
  },
  {
    icon: Bike,
    title: "Αθλητικοί Τραυματισμοί",
    desc: "Επιστροφή στην αθλητική δράση με ασφάλεια.",
    intro: "Εξειδικευμένα πρωτόκολλα αποκατάστασης για ερασιτέχνες και επαγγελματίες αθλητές.",
    paragraphs: [
      "Οι αθλητικοί τραυματισμοί απαιτούν εξειδικευμένη γνώση και ταχύτατη παρέμβαση. Στόχος μας είναι η ασφαλής και γρήγορη επιστροφή του αθλητή στην αγωνιστική δράση χωρίς κίνδυνο επανατραυματισμού.",
      "Συνδυάζουμε σύγχρονες τεχνολογίες (TECAR, Shockwave) με manual therapy και εξειδικευμένα προγράμματα επιστροφής στον αθλητισμό (return-to-sport protocols).",
    ],
    benefits: [
      "Ταχύτατη επιστροφή στην αθλητική δράση",
      "Πρόληψη επανατραυματισμού",
      "Βελτίωση αθλητικής απόδοσης",
      "Εξατομικευμένη αξιολόγηση",
    ],
    indications: ["Θλάσεις μυών", "Διαστρέμματα", "Ρήξεις συνδέσμων / μηνίσκων", "Τενοντοπάθειες", "Κακώσεις από υπέρχρηση"],
  },
  {
    icon: Stethoscope,
    title: "Μετεγχειρητική Αποκατάσταση",
    desc: "Εξειδικευμένα προγράμματα μετά από επεμβάσεις.",
    intro: "Εξατομικευμένα προγράμματα αποκατάστασης μετά από ορθοπεδικές επεμβάσεις, σε στενή συνεργασία με τον χειρουργό.",
    paragraphs: [
      "Η μετεγχειρητική φυσικοθεραπεία είναι καθοριστική για το τελικό αποτέλεσμα κάθε επέμβασης. Ένα σωστά σχεδιασμένο πρόγραμμα διασφαλίζει την πλήρη αποκατάσταση της λειτουργικότητας.",
      "Ακολουθούμε διεθνώς αναγνωρισμένα πρωτόκολλα προσαρμοσμένα στο είδος της επέμβασης, τα οποία περιλαμβάνουν διαχείριση πόνου & οιδήματος, σταδιακή κινητοποίηση και προοδευτική ενδυνάμωση.",
    ],
    benefits: [
      "Πλήρης ανάκτηση λειτουργικότητας",
      "Πρόληψη επιπλοκών",
      "Μείωση χρόνου αποθεραπείας",
      "Συνεργασία με τον χειρουργό σας",
    ],
    indications: ["Αρθροπλαστική γόνατος / ισχίου", "Ανακατασκευή πρόσθιου χιαστού", "Επεμβάσεις ώμου (rotator cuff)", "Επεμβάσεις σπονδυλικής στήλης", "Μετά από κατάγματα"],
  },
];

const reviews = [
  { name: "Μαρία Κ.", text: "Εξαιρετικός επαγγελματισμός και άμεση βελτίωση. Ένιωσα τη διαφορά από την πρώτη συνεδρία." },
  { name: "Γιώργος Π.", text: "Άψογη εξυπηρέτηση και ανθρώπινη προσέγγιση. Τους συστήνω ανεπιφύλακτα." },
  { name: "Ελένη Δ.", text: "Σύγχρονος χώρος και αποτελεσματικές θεραπείες. Το καλύτερο φυσικοθεραπευτήριο στα Σεπόλια." },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3">
      <span className="h-px w-8 bg-gold" />
      <span className="text-[11px] font-medium uppercase tracking-luxury text-gold">{children}</span>
      <span className="h-px w-8 bg-gold" />
    </div>
  );
}

export default function App() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top utility bar */}
      <div className="hidden border-b border-border/60 bg-primary text-primary-foreground md:block">
        <div className="container mx-auto flex h-9 items-center justify-between px-6 text-xs">
          <div className="flex items-center gap-6 text-white/70">
            <span className="flex items-center gap-2"><MapPin className="h-3 w-3 text-gold" />{ADDRESS}</span>
            <span className="flex items-center gap-2"><Clock className="h-3 w-3 text-gold" />Δευ–Παρ · 08:00–10:00 & 15:00–21:00</span>
          </div>
          <a href={`tel:+30${PHONE}`} className="flex items-center gap-2 text-white/90 transition-colors hover:text-gold">
            <Phone className="h-3 w-3 text-gold" />{PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Physiomerimna" className="h-11 w-auto" />
            <div className="hidden flex-col leading-none sm:flex">
              <span className="font-serif-display text-2xl font-semibold tracking-tight text-primary">Physiomerimna</span>
              <span className="mt-1 text-[10px] uppercase tracking-luxury text-muted-foreground">Φυσικοθεραπεία · Σεπόλια</span>
            </div>
          </a>
          <nav className="hidden items-center gap-9 text-[13px] font-medium text-muted-foreground lg:flex">
            <a href="#why" className="transition-colors hover:text-primary">Γιατί Εμάς</a>
            <a href="#services" className="transition-colors hover:text-primary">Υπηρεσίες</a>
            <a href="#about" className="transition-colors hover:text-primary">Σχετικά</a>
            <a href="#reviews" className="transition-colors hover:text-primary">Κριτικές</a>
            <a href="#contact" className="transition-colors hover:text-primary">Επικοινωνία</a>
          </nav>
          <Button asChild size="sm" className="h-10 rounded-none border border-primary bg-primary px-5 text-[12px] uppercase tracking-[0.2em] text-primary-foreground hover:bg-ink">
            <a href={`tel:+30${PHONE}`}>
              <Phone className="mr-2 h-4 w-4" />Ραντεβού
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-hero-gradient">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(${clinic1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "luminosity",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-transparent" />
        <div className="absolute -right-40 top-20 h-96 w-96 animate-float rounded-full bg-gold/10 blur-3xl" />

        <div className="container relative mx-auto grid min-h-[88vh] items-center px-6 py-24 md:py-32">
          <div className="max-w-3xl text-white">
            <div className="mb-8 inline-flex items-center gap-3 border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm animate-fade-in">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-[11px] uppercase tracking-luxury text-white/80">4.8 / 5 · 25+ Google Reviews</span>
            </div>

            <h1 className="mb-8 font-serif-display text-balance text-5xl leading-[1.05] font-medium animate-fade-up md:text-7xl lg:text-[5.5rem]">
              Η τέχνη της <em className="italic text-gold">αποκατάστασης</em>,<br />
              η επιστήμη της φροντίδας.
            </h1>

            <p
              className="mb-12 max-w-xl text-balance text-base leading-relaxed text-white/75 animate-fade-up md:text-lg"
              style={{ animationDelay: "0.1s" }}
            >
              Εξειδικευμένες θεραπείες για πόνο, τραυματισμούς και αποκατάσταση —
              με σύγχρονες τεχνικές, διακριτικότητα και ανθρώπινη φροντίδα στα Σεπόλια.
            </p>

            <div
              className="flex flex-col items-start gap-4 animate-fade-up sm:flex-row sm:items-center"
              style={{ animationDelay: "0.2s" }}
            >
              <Button asChild size="lg" className="group h-14 rounded-none bg-gold px-8 text-[12px] uppercase tracking-[0.25em] text-ink hover:bg-gold-soft">
                <a href={`tel:+30${PHONE}`}>
                  Κλείστε Ραντεβού
                  <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 rounded-none border-white/30 bg-transparent px-8 text-[12px] uppercase tracking-[0.25em] text-white hover:bg-white/10 hover:text-white">
                <a href={MAPS} target="_blank" rel="noopener">
                  <MapPin className="mr-2 h-4 w-4" />Οδηγίες
                </a>
              </Button>
            </div>

            <div className="mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="font-serif-display text-3xl font-medium text-gold md:text-4xl">10+</div>
                <div className="mt-1 text-[10px] uppercase tracking-luxury text-white/50">Χρόνια Εμπειρίας</div>
              </div>
              <div>
                <div className="font-serif-display text-3xl font-medium text-gold md:text-4xl">4.8★</div>
                <div className="mt-1 text-[10px] uppercase tracking-luxury text-white/50">Google Rating</div>
              </div>
              <div>
                <div className="font-serif-display text-3xl font-medium text-gold md:text-4xl">10+</div>
                <div className="mt-1 text-[10px] uppercase tracking-luxury text-white/50">Υπηρεσίες</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="bg-soft-gradient py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-20 max-w-2xl text-center">
            <SectionLabel>Γιατί Εμάς</SectionLabel>
            <h2 className="font-serif-display text-4xl font-medium text-balance text-primary md:text-5xl">
              Η διαφορά μας <em className="italic text-gold">στη φροντίδα</em> σας
            </h2>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <div key={index} className="group relative bg-background p-10 transition-all duration-500 hover:bg-card">
                <div className="mb-8 flex h-12 w-12 items-center justify-center border border-gold/40 bg-background transition-all duration-500 group-hover:bg-gold group-hover:border-gold">
                  <reason.icon className="h-5 w-5 text-gold transition-colors group-hover:text-ink" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 font-serif-display text-2xl font-medium text-primary">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{reason.desc}</p>
                <div className="mt-6 h-px w-10 bg-gold/40 transition-all duration-500 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-background py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-20 max-w-2xl text-center">
            <SectionLabel>Υπηρεσίες</SectionLabel>
            <h2 className="font-serif-display text-4xl font-medium text-balance text-primary md:text-5xl">
              Ολοκληρωμένη <em className="italic text-gold">Φυσικοθεραπεία</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Σύγχρονες μέθοδοι και εξειδικευμένα πρωτόκολλα για κάθε ανάγκη.
            </p>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service, index) => (
              <div key={index} className="group relative overflow-hidden bg-background p-8 transition-all duration-500 hover:bg-primary">
                <service.icon className="mb-6 h-8 w-8 text-gold transition-all duration-500 group-hover:scale-110" strokeWidth={1.25} />
                <h3 className="mb-3 font-serif-display text-xl font-medium leading-tight text-primary transition-colors group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/70">
                  {service.desc}
                </p>
                <div className="mt-6 flex items-center text-[11px] uppercase tracking-[0.2em] text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Μάθετε <ArrowRight className="ml-2 h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative bg-primary py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <SectionLabel>Ο Χώρος μας</SectionLabel>
              <h2 className="font-serif-display text-4xl font-medium text-balance text-white md:text-5xl">
                Ένα περιβάλλον <em className="italic text-gold">σχεδιασμένο</em> για ευεξία
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/60">
              Σύγχρονος, καθαρός και διακριτικός χώρος, εξοπλισμένος με τεχνολογία αιχμής για κάθε ανάγκη αποκατάστασης.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[clinic1, clinic2, clinic3, clinicPilates].map((src, index) => (
              <div key={index} className="group relative aspect-[3/4] overflow-hidden">
                <img
                  src={src}
                  alt={`Χώρος Physiomerimna ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
                <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-luxury text-white/80">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-soft-gradient py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-20 max-w-2xl text-center">
            <SectionLabel>Μαρτυρίες</SectionLabel>
            <h2 className="font-serif-display text-4xl font-medium text-balance text-primary md:text-5xl">
              Τι λένε οι <em className="italic text-gold">ασθενείς</em> μας
            </h2>
            <div className="mt-8 inline-flex items-center gap-4 border border-border bg-background px-6 py-3">
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="font-serif-display text-lg font-semibold text-primary">4.8 / 5</span>
              <span className="h-4 w-px bg-border" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">25+ Google Reviews</span>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((review, index) => (
              <div key={index} className="group relative border border-border bg-background p-10 transition-all duration-500 hover:border-gold hover:shadow-elegant">
                <Quote className="mb-6 h-8 w-8 text-gold/60" strokeWidth={1.25} />
                <p className="mb-8 font-serif-display text-xl leading-relaxed text-foreground/85 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-border pt-6">
                  <div>
                    <div className="font-medium text-primary">{review.name}</div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-luxury text-muted-foreground">Verified Patient</div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-3 w-3 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-background py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="relative">
              <div className="absolute -left-4 -top-4 hidden h-full w-full border border-gold/40 lg:block" />
              <img
                src={team}
                alt="Η ομάδα του Physiomerimna"
                className="relative w-full object-cover shadow-elegant"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -right-4 hidden max-w-[220px] border border-border bg-background p-6 shadow-elegant md:block">
                <div className="mb-2 flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <div className="font-serif-display text-2xl font-semibold text-primary">4.8 / 5</div>
                <p className="mt-1 text-[11px] uppercase tracking-luxury text-muted-foreground">Αξιολόγηση από εκατοντάδες ασθενείς</p>
              </div>
            </div>
            <div>
              <SectionLabel>Σχετικά με εμάς</SectionLabel>
              <h2 className="mb-8 font-serif-display text-4xl font-medium text-balance text-primary md:text-5xl">
                Φροντίδα με <em className="italic text-gold">γνώση</em> και ανθρωπιά
              </h2>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Στο <span className="font-medium text-primary">Physiomerimna</span> προσφέρουμε εξατομικευμένες
                θεραπείες φυσικοθεραπείας με στόχο την άμεση ανακούφιση, τη σωστή αποκατάσταση και τη
                μακροχρόνια ευεξία.
              </p>
              <p className="mb-10 text-base leading-relaxed text-muted-foreground">
                Συνδυάζουμε σύγχρονη τεχνολογία με κλινική εμπειρία, σε ένα διακριτικό περιβάλλον όπου
                κάθε ασθενής αντιμετωπίζεται ως μοναδικός.
              </p>
              <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
                <div>
                  <div className="font-serif-display text-4xl font-medium text-primary">10<span className="text-gold">+</span></div>
                  <div className="mt-2 text-[10px] uppercase tracking-luxury text-muted-foreground">Χρόνια Εμπειρίας</div>
                </div>
                <div>
                  <div className="font-serif-display text-4xl font-medium text-primary">4.8<span className="text-gold">★</span></div>
                  <div className="mt-2 text-[10px] uppercase tracking-luxury text-muted-foreground">Google Rating</div>
                </div>
                <div>
                  <div className="font-serif-display text-4xl font-medium text-primary">10<span className="text-gold">+</span></div>
                  <div className="mt-2 text-[10px] uppercase tracking-luxury text-muted-foreground">Υπηρεσίες</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-soft-gradient py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-20 max-w-2xl text-center">
            <SectionLabel>Επικοινωνία</SectionLabel>
            <h2 className="font-serif-display text-4xl font-medium text-balance text-primary md:text-5xl">
              Κλείστε <em className="italic text-gold">το ραντεβού</em> σας
            </h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-px bg-border">
              <Card className="flex items-start gap-5 rounded-none border-0 p-8 shadow-none">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/40">
                  <MapPin className="h-5 w-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="mb-2 text-[11px] font-medium uppercase tracking-luxury text-gold">Διεύθυνση</h3>
                  <p className="text-base text-primary">{ADDRESS}</p>
                </div>
              </Card>
              <Card className="flex items-start gap-5 rounded-none border-0 p-8 shadow-none">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/40">
                  <Phone className="h-5 w-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="mb-2 text-[11px] font-medium uppercase tracking-luxury text-gold">Τηλέφωνο</h3>
                  <a href={`tel:+30${PHONE}`} className="text-base text-primary transition-colors hover:text-gold">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </Card>
              <Card className="flex items-start gap-5 rounded-none border-0 p-8 shadow-none">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/40">
                  <Clock className="h-5 w-5 text-gold" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-[11px] font-medium uppercase tracking-luxury text-gold">Ώρες Λειτουργίας</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      ["Δευτέρα", "8:00–10:00 π.μ., 3:00–9:00 μ.μ."],
                      ["Τρίτη", "8:00–10:00 π.μ., 3:00–9:00 μ.μ."],
                      ["Τετάρτη", "8:00–10:00 π.μ., 3:00–9:00 μ.μ."],
                      ["Πέμπτη", "8:00–10:00 π.μ., 3:00–9:00 μ.μ."],
                      ["Παρασκευή", "8:00–10:00 π.μ., 3:00–9:00 μ.μ."],
                      ["Σάββατο", "Κλειστά"],
                      ["Κυριακή", "Κλειστά"],
                    ].map(([day, hours]) => (
                      <li key={day} className="flex justify-between gap-4 border-b border-border/60 pb-2 last:border-0">
                        <span className="font-medium text-primary">{day}</span>
                        <span>{hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
              <div className="flex gap-px bg-border pt-px">
                <Button asChild className="h-14 flex-1 rounded-none bg-primary text-[12px] uppercase tracking-[0.25em] text-primary-foreground hover:bg-ink">
                  <a href={`tel:+30${PHONE}`}>
                    <Phone className="mr-2 h-4 w-4" />Κάλεσε
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-14 flex-1 rounded-none border-primary bg-background text-[12px] uppercase tracking-[0.25em] text-primary hover:bg-primary hover:text-white">
                  <a href={FB} target="_blank" rel="noopener">
                    <Facebook className="mr-2 h-4 w-4" />Facebook
                  </a>
                </Button>
              </div>
            </div>
            <div className="min-h-[500px] overflow-hidden border border-border shadow-elegant">
              <iframe
                title="Χάρτης Physiomerimna"
                src={MAPS_EMBED}
                className="h-full min-h-[500px] w-full grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink py-20 text-white/70">
        <div className="container mx-auto px-6">
          <div className="grid items-start gap-12 md:grid-cols-3">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <img src={logo} alt="Physiomerimna" className="h-12 w-auto brightness-0 invert" />
                <span className="font-serif-display text-2xl font-semibold text-white">Physiomerimna</span>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-white/55">
                Εξειδικευμένη φυσικοθεραπεία στα Σεπόλια. Φροντίδα με γνώση, διακριτικότητα και ανθρωπιά.
              </p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
                <span className="ml-3 text-xs text-white/60">4.8 / 5 · Google</span>
              </div>
            </div>
            <div>
              <h4 className="mb-5 text-[11px] font-medium uppercase tracking-luxury text-gold">Επικοινωνία</h4>
              <p className="mb-3 flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />{ADDRESS}
              </p>
              <a href={`tel:+30${PHONE}`} className="flex items-center gap-3 text-sm transition-colors hover:text-gold">
                <Phone className="h-4 w-4 text-gold" strokeWidth={1.5} />{PHONE_DISPLAY}
              </a>
            </div>
            <div>
              <h4 className="mb-5 text-[11px] font-medium uppercase tracking-luxury text-gold">Ακολουθήστε μας</h4>
              <a href={FB} target="_blank" rel="noopener" className="inline-flex items-center gap-3 border border-white/15 px-5 py-3 text-sm transition-all hover:border-gold hover:text-gold">
                <Facebook className="h-4 w-4" strokeWidth={1.5} />Facebook
              </a>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[11px] uppercase tracking-luxury text-white/40 md:flex-row">
            <span>© {new Date().getFullYear()} Physiomerimna · Με την επιφύλαξη παντός δικαιώματος</span>
            <span>Φυσικοθεραπεία · Σεπόλια · Αθήνα</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
