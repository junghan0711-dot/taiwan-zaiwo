/* oxlint-disable nextjs/no-img-element -- GitHub Pages 使用已壓縮的靜態 WebP，無 Next.js 圖片伺服器。 */
import { brandImagery, type BrandImageName } from '@/lib/brand-imagery';

export function BrandImage({ name, className = '', sizes = '(max-width: 600px) 100vw, 50vw', caption = true }: {
  name: BrandImageName; className?: string; sizes?: string; caption?: boolean;
}) {
  const photo = brandImagery[name];
  return <figure className={`brand-photo ${className}`}>
    <img src={`images/${photo.file}-960.webp`}
      srcSet={`images/${photo.file}-480.webp 480w, images/${photo.file}-960.webp 960w, images/${photo.file}.webp 1536w`}
      sizes={sizes} alt={`${photo.alt}（AI 生成情境意象）`} width={1536} height={1024} loading="lazy" decoding="async" />
    {caption && <figcaption><span>{photo.caption}</span><small>AI 生成意象</small></figcaption>}
  </figure>;
}
