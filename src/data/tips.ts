export interface TipItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
}

export const tipsData: TipItem[] = [
  {
    id: 't1',
    slug: 'panduan-memilih-konsep-wedding-modern-tradisional',
    title: 'Pasti Nikahmu BEDA: Memilih Konsep Wedding Impian Antara Sentuhan Modern & Tradisi',
    category: 'Konsep & Tema',
    date: '20 September 2025',
    readTime: '4 menit baca',
    excerpt: 'Bagaimana memadukan kesakralan tradisi keluarga dengan estetika modern masa kini agar pesta pernikahan Anda terasa unik dan berkesan.',
    image: '/images/hero-portrait.webp',
    content: [
      'Setiap pasangan memiliki cerita cinta yang unik. Karena itu, pernikahan Anda tidak harus terlihat sama seperti pernikahan orang lain — sesuai moto kami di My Dream Organizer: "Pasti Nikahmu BEDA!".',
      'Memadukan unsur tradisi yang sakral dengan sentuhan visual kontemporer membutuhkan harmonisasi yang matang: mulai dari palet warna busana, dekorasi pelaminan, hingga alur prosesi temu pengantin.',
      'Kunci utama adalah mengidentifikasi bagian mana dari prosesi adat yang paling esensial bagi orang tua, lalu membalutnya dengan ritme acara yang dinamis dan menyenangkan bagi rekan-rekan generasi muda.',
      'Tim konseptor My Dream Organizer selalu siap menyusun moodboard tematik kustom yang disesuaikan dengan kepribadian kedua mempelai.'
    ]
  },
  {
    id: 't2',
    slug: 'cara-menghitung-anggaran-dan-porsi-katering-efektif',
    title: 'Panduan Menghitung Porsi Katering & Anggaran Acara Agar Tidak Boros Maupun Kekurangan',
    category: 'Anggaran & Katering',
    date: '12 Agustus 2025',
    readTime: '5 menit baca',
    excerpt: 'Rumus realistis rasio buffet utama dan aneka food stall gubukan agar jamuan tamu di pesta Anda terhidang melimpah dan tertata elegan.',
    image: '/images/ballroom-candid.webp',
    content: [
      'Jamuan katering adalah jantung kehormatan keluarga dalam menjamu para tamu undangan. Kekhawatiran makanan habis sebelum acara selesai dapat dihindari dengan kalkulasi rasio yang teruji.',
      'Rumus aman: Jika Anda menyebar 400 undangan (estimasi 800 tamu hadir), alokasikan 500–600 porsi buffet utama ditambah 4 hingga 5 kali lipat porsi gubukan (2.000–2.500 porsi stall).',
      'Pastikan juga vendor katering memiliki tim replenishment yang responsif dan floor management yang terkoordinasi dengan tim wedding organizer di lapangan.',
      'My Dream Organizer menyediakan personal food-coordinator khusus untuk memantau kapasitas setiap stall makanan secara real-time sepanjang resepsi berlangsung.'
    ]
  },
  {
    id: 't3',
    slug: 'checklist-timeline-persiapan-event-dan-wedding-h-6-bulan',
    title: 'Timeline Terstruktur Persiapan Wedding & Event: Dari Penentuan Konsep Hingga Hari-H',
    category: 'Manajemen Waktu',
    date: '05 Juli 2025',
    readTime: '6 menit baca',
    excerpt: 'Checklist terperinci mengunci venue, kurasi vendor dekorasi, technical meeting, dan simulasi gladi resik agar acara bebas stres.',
    image: '/images/wedding-artifacts.webp',
    content: [
      'Mewujudkan acara berkesan tanpa panik membutuhkan manajemen waktu yang disiplin dan transparan.',
      'H-6 Bulan: Tentukan tanggal, skala acara, budget plafon, dan pilih My Dream Organizer sebagai mitra pengarah acara Anda.',
      'H-4 Bulan: Kunci venue pilihan di Jember, selesaikan kurasi katering, gaun pengantin, serta tema dekorasi visual.',
      'H-1 Bulan: Technical meeting gabungan bersama seluruh vendor untuk sinkronisasi master rundown menit ke menit.',
      'H-1 Minggu: Final briefing keluarga, pengumpulan seserahan/properti, dan gladi resik bersama tim organizer.'
    ]
  }
];
