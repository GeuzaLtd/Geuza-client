import localFont from 'next/font/local'

export const esRebond = localFont({
  src: [
    {
      path: './fonts/ESRebondGrotesqueTRIAL-Thin-BF6618904123ce3.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/ESRebondGrotesqueTRIAL-Regular-BF66189040b697b.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ESRebondGrotesqueTRIAL-Semibold-BF66189040640ea.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/ESRebondGrotesqueTRIAL-Bold-BF66189040400df.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/ESRebondGrotesqueTRIAL-Extrabold-BF661890400e032.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-esrebond'
})
