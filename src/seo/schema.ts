const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL!

export const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}#business`,

  name: 'HomeX Automação',
  url: BASE_URL,
  image: `${BASE_URL}/og-image.jpg`,

  description:
    'Empresa especializada em automação residencial em São José dos Campos, Jacareí e região.',

  telephone: '+55-12-99641-4102',
  email: 'contato@homexautomacao.com.br',

  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Estevan Corbani, 304',
    addressLocality: 'Jacareí',
    addressRegion: 'SP',
    postalCode: '12300-000',
    addressCountry: 'BR',
  },

  areaServed: [
    { '@type': 'City', name: 'São José dos Campos' },
    { '@type': 'City', name: 'Jacareí' },
  ],

  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.2985,
    longitude: -45.9654,
  },

  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },

  sameAs: [
    'https://instagram.com/homexautomacao',
    'https://wa.me/5512996414102',
  ],
}