import { IconInfo } from '@interfaces/iconInfo.interfaces';

enum IconType {
  arrowtopright = 'arrowtopright',
  razoomart = 'razoomart',
  sparkles = 'sparkles',
  youtube = 'youtube',
  logoAntiHype = 'logoAntiHype',
  logoDobro = 'logoDobro',
  logoDrzhk = 'logoDrzhk',
  logoKorean = 'logoKorean',
  logoMaxfont = 'logoMaxfont',
  logoMinecraft = 'logoMinecraft',
  logoRu = 'logoRu',
  logoUwu = 'logoUwu',
  logoLove = 'logoLove',
  logoAustralian = 'logoAustralian',
  logoAmbid = 'logoAmbid',
  logoRzmrt = 'logoRzmrt',
}

export const IconList: { [key in IconType]: IconInfo } = {
  [IconType.arrowtopright]: {
    link: 'assets/icons/arrow-top-right.svg',
    description: 'arrow image',
  },
  [IconType.razoomart]: {
    link: 'assets/icons/razoomart-logo/logo.svg',
    description: 'razoomart image',
  },
  [IconType.sparkles]: {
    link: 'assets/icons/sparkles.png',
    description: 'sparkles image',
  },
  [IconType.youtube]: {
    link: 'assets/icons/youtube.svg',
    description: 'youtube image',
  },
  [IconType.logoAntiHype]: {
    link: 'assets/icons/razoomart-logo/logo_antihype.svg',
    description: 'razoomart logo image',
  },
  [IconType.logoDobro]: {
    link: 'assets/icons/razoomart-logo/logo_dobro.svg',
    description: 'razoomart logo image',
  },
  [IconType.logoDrzhk]: {
    link: 'assets/icons/razoomart-logo/logo_drzhk.svg',
    description: 'razoomart logo image',
  },
  [IconType.logoKorean]: {
    link: 'assets/icons/razoomart-logo/logo_korean.svg',
    description: 'razoomart logo image',
  },
  [IconType.logoMaxfont]: {
    link: 'assets/icons/razoomart-logo/logo_maxfont.svg',
    description: 'razoomart logo image',
  },
  [IconType.logoMinecraft]: {
    link: 'assets/icons/razoomart-logo/logo_minecraft.svg',
    description: 'razoomart logo image',
  },
  [IconType.logoRu]: {
    link: 'assets/icons/razoomart-logo/logo_ru.svg',
    description: 'razoomart logo image',
  },
  [IconType.logoUwu]: {
    link: 'assets/icons/razoomart-logo/logo_uwu.svg',
    description: 'razoomart logo image',
  },
  [IconType.logoLove]: {
    link: 'assets/icons/razoomart-logo/logo_love.svg',
    description: 'razoomart logo image',
  },
  [IconType.logoAustralian]: {
    link: 'assets/icons/razoomart-logo/logo_australian.svg',
    description: 'razoomart logo image',
  },
  [IconType.logoAmbid]: {
    link: 'assets/icons/razoomart-logo/logo_ambid.svg',
    description: 'razoomart logo image',
  },
  [IconType.logoRzmrt]: {
    link: 'assets/icons/razoomart-logo/logo_rzmrt.svg',
    description: 'razoomart logo image',
  },
};
