# next/font -> will automatically optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance. No requests are sent to Google by the browser.

# Google Fonts => No requests are sent to Google by the browser. (import {foo} from next/font/google')

1. import { Inter } from 'next/font/google';

2. const inter = Inter({ subsets: ['latin'], weight: '700' , variable: '--font-inter' });

3. add => "className={inter.className}" from html element (<div className={inter.className}>text</div>)

4. add => "className={inter.variable}" from html element (<div className={`${inter.variable} font-inter`}>text</div>)

5. if you want to use (<div className="font-inter">text</div>) for this font, you need to add => "className={`${inter.variable}`}"  
   from parent html element (<div className={`${inter.variable}`}> <p className="font-inter">text</p> </div>) and you configuration Tailwind.config.js file theme: { fontFamily: {inter: ['var(--font-inter)', ...fontFamily.sans]} } beacuse you want to use font-inter to html element now you can use (<div className={`${inter.variable}`}><div className="font-inter">text</div></div>) too you can use to add font-famly: var(--font-inter) to each class in css file => ex: .blog { font-family: var(--font-inter); }

   - if you dont configuration Tailwind.config.js file (theme: { fontFamily: {inter: ['var(--font-inter)', ...fontFamily.sans]} }) you can not use (<div className="font-inter">text</div> or <p className={`${inter.variable} font-inter`}>text</p>)

# Local Fonts => No requests are sent to Google by the browser. (import localFont from 'next/font/local';)

1. import localFont from 'next/font/local';

2. we download the font file from via the internet after put it in the public folder (public/fonts => my-font.woff2) and use it in the  
   project

3. const myFont = localFont({ src: './my-font.woff2', variable: '--font-my-font' });

4. add => "className={`${myFont.variable} font-myfont}" from html element   ex:(<div className={`${myFont.variable} font-myfont`}>text</div>)
   or (<div className={`${myFont.variable} font-myfont`}> <p className="font-myfont">text</p> </div>)

5. if you want to use (<div className="font-my-font">text</div>) for this, you need to add => "className={`${myFont.variable}`}" to  
   parent html element <div className={`${myFont.variable}`}> <p className="font-inter">some ... text </p> </div>

   and you configuration Tailwind.config.js file theme: { fontFamily: {myFont: ['var(--font-my-font)', ...fontFamily.sans]} } beacuse you want to use font-my-font to html element now you can use (<div className={`${myFont.variable}`}><div className="font-my-font">text</div></div>)

   too you can use to add font-famly: var(--font-my-font) to each class in css file => ex: .blog { font-family: var(--font-my-font); }

   - if you dont configuration Tailwind.config.js file (theme: { fontFamily: {myFont: ['var(--font-my-font)', ...fontFamily.sans]} }) you can not use (<div className="font-my-font">text</div> or <p className={`${myFont.variable} font-my-font`}>text</p>)
