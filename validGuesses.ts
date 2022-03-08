import { CONFIG } from './config'

export const VALIDGUESSES = [
 'abiko',
'abita’,
'abiye’,
'aboli’,
'absid', 
'achte’,  
'admèt’,  
'adore’,  
'adrès’,  
'afrik’,  
'ajans’,  
'akeri’,  
'akeyi’,     
'akize’,  
'aksan’,     
'aktif’,  
'akòde’,  
'aleka’,     
'alkòl’,  
'alman',     
'almay’,  
'amann’,  
'amize’,  
'andre’,  
'andwa’,  
'anfle’,  
'anfòm’,  
'angle’,  
'anglè’,  
'anile’,  
'annou’,  
'anons’,     
'anpil’,     
'antre’,  
'anvan’,  
'anyen’,  
'arete’,  
'arive’,  
'asire’,  
'asyèt’,  
'atake’,     
'atann’,
'atire’,
'avoka’,
'avril’,
'avyon’,
'avèti’,
'ayiti’,
'analiz’,  
'angaje’, 
'animal’,  
'anmède’,  
'anonse’,  
'anperè’,  
'ansanm’,  
'ansent’,  
'anseye’,  
'ansyen’,  
'antere’,  
'anwiye’,
'babay’,  
'bagaj’,  
'bagay’,  
'bakou’, 
'balèn’,  
'banza’,  
'barik’,
'basen’,  
'basin’,  
'batay’,  
'baton’,  
'batri’,  
'batèm’,  
'bidjè’,  
'biyar’,  
'blese’,  
'blesi’,  
'bliye’,  
'bloke’,  
'blond’,  
'bokal’,  
'boksè’,  
'bonis’,  
'bonte’,  
'bouch’,  
'boule’, 
'boure’,  
'bèlen’,  
'bòdwo’,
'chabon’,  
'chache’,  
'chadèk’,  
'chanje’,  
'chante’,  
'chantè’,  
'chanèl’,  
'chapit’,  
'chapèl’,  
'chemen’,
'chemiz’,  
'cherif’,  
'chimik’,  
'chinwa’,  
'chosèt’,  
'chutne’,  
'chwazi’,  
'chèche’,  
'danje’,
'danse’,
'dansè’,  
'dapre’,  
'davwa’,  
'debaz’,  
'dedye’,  
'defèt’,  
'degre’,  
'dekri’,
'demen’,  
'desan’,  
'desen’,  
'detay’,  
'detwi’,  
'devan’,  
'devwa’,  
'deyès’,  
'dezas’,  
'dezòd’,  
'diman’,  
'dirèk’,  
'disèt’,  
'diven’,  
'divòs’,  
'doktè’,  
'dolar’,  
'domaj’,  
'dosye’,  
'douch’,  
'doulè’,  
'drapo’,  
'dènye’,  
'echwe’,  
'echèk’,  
'echèl’,  
'editè’,  
'egzak’,  
'ekipe’,  
'ekran’,  
'ekspè’,  
'elyòm’,  
'enkli’,  
'enpak’,  
'ensèk’,  
'entèn’,  
'enèji’,  
'eseye’,  
'eskiz’,  
'eskòt’,  
'espas’,  
'espay’,  
'espès’, 
'estad’,  
'etwal’,  
'etwat’,  
'evite’, 
'endesi’,  
'endyen’,  
'endèks’,  
'enfòme’,  
'enskri’,  
'entans’,  
'enterè’,  
'entèdi’,  
'envite’,
'édtan’,
'fache’,  
'faktè’, 
'falèz’,  
'fanmi’,  
'farin’,  
'fasil’,  
'fason’,  
'fatra’,  
'fenèt’,  
'fichu’,  
'fidèl’,  
'filip’,  
'fimen’,  
'fimye’,  
'final’,  
'fisèl’,  
'fizik’,  
'fotèy’,  
'foutu’,  
'fouye’,  
'frans’,  
'frape’,  
'fredi’,  
'fukin’,  
'fyète’,  
'fèmen’,  
'fènwa’,  
'fòmil’,  
'fòmèl’,  
'fòtin’,
'galri’,  
'gason’,  
'gayan’,  
'glise’,  
'glous’,  
'grann’,  
'grenn’, 
'gwosè’,  
'gwoup’,
'jaden’, 
'jakòb’,  
'japon’,  
'jarèt’,  
'jenou’,  
'jeyan’,  
'jinyò’,  
'jiraf’,  
'joupa’,  
'joure’,  
'jwenn’,  
'jèten’,
'ijans’,  
'inite’,  
'istwa’,  
'itali’,  
'izayi’, 
'kabin’,  
'kabòn’,  
'kache’,  
'kadav’,  
'kalme’,  
'kalòj’,  
'kalòt’,  
'kanna’,  
'kanon’,  
'kanpe’,  
'kapab’,  
'karyè’,  
'kasèt’,  
'katye’,  
'katòz’,  
'kazye’,  
'kebèk’,  
'kenbe’,  
'kijan’,  
'kikin’,  
'kilti’,  
'kilès’,  
'kilòt’,  
'kirye’,  
'klase’,  
'klere’,  
'klima’,  
'kloti’,  
'kloun’,  
'klòch’,  
'kolye’,  
'kolèj’,  
'kolòn’,  
'komen’,  
'komik’,  
'komès’,  
'komèt’,  
'konba’,  
'konfò’,  
'konsa’,  
'konsè’,  
'konte’,  
'koton’,  
'koule’,  
'koulè’,  
'koupe’,  
'kouri’,  
'koute’,  
'kouto’, 
'kraze’,  
'kredi’,  
'kreve’,  
'kreye’,  
'kriye’,
'kwafè’, 
'kòlèg’,  
'kòman’,  
'kònen’,  
'kòrèk’,
'labou’,  
'lajan’,  
'lakay’,  
'lakou’,  
'lakòl’,  
'lakòz’,  
'lalin’,  
'lalwa’,  
'lanfè’,  
'lanmè’,  
'lanmò’,  
'lapen’,  
'lapli’, 
'lapòs’,  
'lavil’,  
'legim’,  
'lekti’,  
'lekòl’,  
'lendi’,  
'lesiv’,  
'leson’,  
'levit’,  
'likid’,  
'limen’,  
'limit’,  
'limyè’,  
'linèt’,  
'lokal’,  
'longè’,  
'lotèl’,  
'lwaye’,  
'lènmi’,  
'lèzòm’,  
'lògèy’,  
'mache’,  
'majik’,  
'makak’,  
'malad’,  
'maman’,  
'manch’,  
'manda’,  
'mande’,  
'manje’,  
'manke’,  
'manti’,  
'marin’,  
'marye’,  
'masiv’,  
'maten’,  
'matye’,  
'matyè’,  
'mawon’,  
'meday’,  
'medya’,  
'memwa’,  
'menas’,  
'menen’,  
'mesaj’,  
'mesye’,  
'metòd’,  
'miche’,  
'minis’,  
'minit’,  
'minwi’,  
'mirak’,  
'miray’, 
'misil’,  
'mistè’,  
'mitan’,  
'mizik’,  
'mobil’,  
'modèl’,  
'modèn’,  
'moman’,  
'monte’,  
'mouch’,  
'mouri’,  
'moute’,  
'mouye’,  
'mwens’,  
'natan’,  
'negro’,  
'neyon’,  
'noten’,  
'nouvo’,  
'nwaye’, 
'nwayo’,  
'nòmal’,  
'obeyi’,  
'ofans’,  
'okenn’,  
'okipe’,  
'oktòb’,  
'onore’,  
'opere’,  
'opoze’,  
'oratè’,  
'òdinè’, 
'oubyen’,  
'ouvèti’,  
'pafwa’, 
'pakin’,  
'pakèt’,  
'panik’,  
'panse’,  
'panèl’,  
'papye’,  
'parad’,  
'paran’,  
'parye’,  
'parèt’,  
'parèy’,  
'pasaj’,  
'paske’,  
'paspò’,  
'patnè’,  
'pawas’,  
'pawòl’,  
'peche’,  
'pechè’,  
'peman’,  
'penti’,  
'petèt’,  
'pilòt’,  
'piman’,  
'pinèz’,  
'pisin’,  
'pitit’,  
'pitye’,  
'pitza’,  
'plant’,  
'plase’,  
'plenn’,  
'plent’,  
'plezi’,  
'pliye’,  
'polòy’,  
'posib’,  
'potab’,  
'poupe’,  
'pouri’,  
'pouse’,  
'powèm’,  
'powèt’,  
'prese’,  
'prete’,  
'prive’,  
'priye’,  
'puten’,  
'pwent’,  
'pwezi’,  
'pwojè’,  
'pwosè’,  
'pwòch’,  
'pyano’,  
'pèlen’,  
'pèmèt’,  
'pòtay’,  
'radyo’,  
'raman’,  
'ranje’,  
'rapid’,  
'raple’,  
'rasin’,  
'redwi’,  
'refòm’,  
'rejte’,  
'reken’,  
'remèd’,  
'rense’,  
'resan’,  
'respè’,  
'retrè’,  
'revni’,  
'revèy’,  
'reyèl’,  
'rezen’,  
'rezon’,  
'rezèv’,  
'riban’,  
'rivaj’,  
'rivyè’,  
'sakre’,  
'samdi’,  
'sante’,  
'santi’,  
'sapen’,  
'satan’,  
'satin’,  
'savon’,  
'sekou’,  
'sekrè’,  
'sektè’,  
'selil’,  
'semèn’,  
'senti’,  
'sezon’,  
'sifas’,  
'sifle’,  
'siksè’,  
'siman’,  
'sirèn’,  
'sirèt’, 
'sitou’,  
'sitye’,  
'sivil’, 
'siviv’,  
'siyal’,  
'siyen’,  
'solèy’,  
'sonje’,  
'sonèt’,  
'souke’,  
'souri’,  
'souse’,  
'sovaj’,  
'syans’,  
'sèjan’,  
'sèman’,  
'sèten’,  
'sèvis’,  
'sòlda’,  
'sòsyè’,  
'tablo’,  
'tache’,  
'taksi’,  
'talan’,  
'talin’,  
'tande’,  
'tante’, 
'taypè’,  
'tenis’,  
'teori’,  
'teren’,  
'terib’,  
'teste’,  
'teyat’,  
'timid’,  
'tinèl’,  
'tipik’,  
'tonbe’,  
'total’,  
'touse’,  
'touye’,  
'traka’,  
'trant’,  
'trape’,  
'trase’,  
'trayi’,  
'trete’,  
'trezò’,  
'twofe’,  
'twoup’,  
'twous’, 
'vajen’,  
'valiz’,  
'venis’,  
'vilaj’,  
'vinèg’,  
'viris’,  
'vitès’,  
'vivan’,  
'vizit’,  
'vlope’,  
'vodou’,  
'volim’,  
'vyann’,  
'wayal’,  
'wiski’,  
'woman’,  
'women’,  
'woule’,  
'zanmi’,  
'zegwi’,  
'zepòl’,  
'zouti’, 
'zwazo’,  
'zèklè’,  
'zòrèy’,
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
