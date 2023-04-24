import { Cloudinary } from '@cloudinary/url-gen'

export const cloudinary = new Cloudinary({ cloud: { cloudName: 'albertvila' } })

export type CloudinaryImageId =
  // 2023-02-25-sessio-fotos-carrer
  | 'DSC02847c_copia'
  // 2023-llista-frontal
  | '2023-llista-frontal/1_DSC02904'
  | '2023-llista-frontal/2_DSC02769b1'
  | '2023-llista-frontal/3_DSC02803b_opt'
  | '2023-llista-frontal/4_DSC02941b_opt'
  | '2023-llista-frontal/5_DSC02818b_opt'
  | '2023-llista-frontal/6_DSC03096'
  | '2023-llista-frontal/7_DSC02755_opt'
  | '2023-llista-frontal/8_DSC02819'
  | '2023-llista-frontal/9_DSC03094'
  | '2023-llista-frontal/10_DSC03089'
  | '2023-llista-frontal/11_DSC02897'
  | '2023-llista-frontal/12_DSC03195'
  | '2023-llista-frontal/13_DSC03178'
  | '2023-llista-frontal/14_DSC03320_opt'
  | '2023-llista-frontal/15_DSC03079'
  | '2023-llista-frontal/16_DSC03215'
  | '2023-llista-frontal/17_DSC03182'
