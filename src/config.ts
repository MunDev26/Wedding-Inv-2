/**
 * KONFIGURASI UNDANGAN PERNIKAHAN
 * Edit file ini untuk menyesuaikan data undangan.
 */

export const config = {
  // ── Meta & Judul ──────────────────────────────────────────────
  meta: {
    /** Judul tab browser */
    title: 'Undangan Pernikahan — Tio & Mia',
    /** Nama tamu default jika URL tidak mengandung ?to= */
    defaultGuest: 'Bapak / Ibu / Saudara/i',
    /** Tanggal tampilan di cover */
    // dateDisplay: 'Sabtu, 9 Januari 2027',
    // /** Tanggal pendek di footer */
    // dateShort: '09 · 01 · 2027',
    /**
     * URL file musik latar belakang.
     * Letakkan file mp3 di folder public/, lalu isi '/nama-file.mp3'.
     * Kosongkan string untuk menonaktifkan tombol musik.
     */
    musicUrl: 'music.mp3',
  },

  // ── Pembuka ───────────────────────────────────────────────────
  opening: {
    bismillah: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْم',
    verseArabic: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ',
    verse: '"Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."',
    verseSource: '— QS. Ar-Rum: 21',
  },

  // ── Foto ──────────────────────────────────────────────────────
  photos: {
    /** Foto background halaman cover */
    cover: '/foto/Foto_Pembuka.JPG',
    /** Foto profil mempelai pria */
    groom: '/foto/Foto_Pria.JPG',
    /** Foto profil mempelai wanita */
    bride: '/foto/Foto_Wanita.JPG',
    /** Slide foto di section pembuka (3 foto) */
    slides: [
      '/foto/Slide_1.JPG',
      '/foto/Slide_2.JPG',
      '/foto/Slide_3.JPG',
    ],
  },

  // ── Data Mempelai ─────────────────────────────────────────────
  couple: {
    groom: {
      nickname: 'Tio',
      fullName: 'Martio Hirvino',
      degree: 'S.T.',
      /** Huruf awal untuk avatar (fallback jika foto tidak ada) */
      initial: 'T',
      /** "Putra pertama / kedua / ketiga dari" */
      position: 'Putra pertama dari',
      father: 'Bapak Cerri Oktavilano',
      mother: 'Ibu Yuhirlen',
    },
    bride: {
      nickname: 'Mia',
      fullName: 'Islamiati Herlim',
      degree: 'S.Ds.',
      initial: 'M',
      position: 'Putri keempat dari',
      father: 'Bapak DR.Abdul Halim Hanafi M.Ag',
      mother: 'Ibu Dra.Herida',
    },
  },

  // ── Detail Acara ──────────────────────────────────────────────
  events: [
    {
      icon: '🕌',
      type: 'Akad Nikah',
      name: 'Ijab Kabul',
      date: 'Sabtu, 09 Januari 2027',
      time: '08.00 – 10.00 WIB',
      venue: 'Rumah Mempelai Wanita',
      address: 'Rumah Tiga Ruang No.21 RT.2 RW.6',
      /** URL Google Maps lokasi. Kosongkan untuk menyembunyikan tombol. */
      mapsUrl: 'https://maps.app.goo.gl/PjrRFnE6G68qwuwC8',
    },
    {
      icon: '🌺',
      type: 'Resepsi Mempelai Wanita',
      name: "Islamiati Herlim 'Mia'",
      date: 'Sabtu, 09 Januari 2027',
      time: '10.00 WIB – Selesai',
      venue: 'Rumah Mempelai Wanita',
      address: 'Rumah Tiga Ruang No.21 RT.2 RW.6',
      mapsUrl: 'https://maps.app.goo.gl/PjrRFnE6G68qwuwC8',
    },
    {
      icon: '🌸',
      type: 'Resepsi Mempelai Pria',
      name: "Martio Hirvino 'Tio'",
      date: 'Minggu, 17 Januari 2027',
      time: '10.00 WIB – Selesai',
      venue: 'Rumah Mempelai Pria',
      address: 'Rimbo Data RT.1 RW.2 Bandar Buat',
      mapsUrl: 'https://maps.app.goo.gl/hn3jbeYE9Cokt9nb6',
    },
  ],

  // ── Countdown ─────────────────────────────────────────────────
  countdown: {
    /**
     * Target waktu acara dalam format ISO 8601.
     * Harus sesuai dengan tanggal & jam akad nikah.
     */
    targetDate: '2027-01-09T08:00:00',
  },

  // ── Amplop Digital ────────────────────────────────────────────
  gift: {
    description:
      'Doa restu Anda adalah hadiah terindah bagi kami.\nNamun jika Anda ingin berbagi kebahagiaan, berikut informasinya.',

    /**
     * URL gambar QRIS (jpg/png).
     * Letakkan file di public/ atau gunakan URL eksternal.
     * Kosongkan string untuk menyembunyikan tab QRIS.
     */
    qrisUrl: 'Qris.jpeg',

    /** Rekening bank. Tambah/hapus object sesuai kebutuhan. */
    bankAccounts: [
      {
        bank: 'Bank BNI',
        number: '1524432927',
        holder: 'a/n Martio Hirvino',
        /** Nomor tanpa spasi untuk fungsi salin */
        copyValue: '1524432927',
      },
      {
        bank: 'Bank JAGO',
        number: '101650126489',
        holder: 'a/n Islamiati Herlim',
        copyValue: '101650126489',
      },
    ],

    address: {
      title: 'Alamat Pengiriman Kado',
      lines: [
        'Rumah Tiga Ruang No.21 RT.2 RW.6 Kelurahan Anduring,',
        'Kota Padang, Sumatera Barat 25151',
      ],
      recipient: 'Mia',
      phone: '0851-9800-1101',
      /** Teks yang disalin saat tombol salin ditekan */
      copyValue: 'Rumah Tiga Ruang No.21 RT.2 RW.6 Kelurahan Anduring, Kota Padang',
    },
  },

  // ── Footer ────────────────────────────────────────────────────
  footer: {
    closing:
      "Merupakan suatu kehormatan dan kebahagiaan bagi kami\napabila Bapak/Ibu/Saudara/i berkenan hadir\ndan memberikan doa restu.\n\nWassalamu'alaikum Warahmatullahi Wabarakatuh.",
    madeBy: 'Made by — Harry Rahmadi Munly',
  },
} as const;
