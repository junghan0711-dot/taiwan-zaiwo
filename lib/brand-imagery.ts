export const brandImagery = {
  landscape: { file: 'landscape', alt: '丘陵環繞的多樣化農園與彎曲步道', caption: '從一片土地，長出更多可能。' },
  harvest: { file: 'harvest', alt: '農人在菜畦間手持剛採收的葉菜', caption: '田間的照顧，成為日常的豐盛。' },
  sanctuary: { file: 'sanctuary', alt: '牛隻在綠草與樹蔭下平靜休息', caption: '讓每一種生命，都有安心的位置。' },
  permaculture: { file: 'permaculture', alt: '混植香草與蔬菜的樸門菜園、覆蓋物與雨水桶', caption: '觀察自然，也向自然學習。' },
  inclusive: { file: 'inclusive', alt: '農場工作者在無障礙工作桌前協作整理蔬菜', caption: '一起工作，讓能力被看見。' },
  scraps: { file: 'scraps', alt: '分類收集在不鏽鋼盆中的蔬果邊料與蛋殼', caption: '剩餘資源，也有下一段旅程。' },
  corporate: { file: 'corporate', alt: '成人團隊在農園共同栽種幼苗', caption: '讓共同的目標，在土地上實踐。' },
  learning: { file: 'learning', alt: '學習者在戶外工作坊觀察土壤與幼苗', caption: '用觀察與雙手，理解土地。' },
  community: { file: 'community', alt: '地方夥伴圍坐樹下木桌討論農園規劃', caption: '把各自的專長，種在一起。' },
  compost: { file: 'compost-hands', alt: '雙手將成熟堆肥撒入土壤', caption: '從一把土，開始理解循環。' },
} as const;
export type BrandImageName = keyof typeof brandImagery;
