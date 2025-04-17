import { fontCalSans, inter, roboto_mono } from '../../../../public/assets/fonts';

const text = 'Hello World';
export default function FontLessons() {
  return (
    <div className={`${fontCalSans.variable} ${inter.variable} ${roboto_mono.variable}`}>
      <p className={`${fontCalSans.variable} font-calSans`}>{text}-fontCalSans.variable </p>
      <p className="font-calSans">{text} - className=font-calSans</p>
      <p className={fontCalSans.className}>{text} - fontCalSans.className</p>
      <p>-----------GOOGLE FONT INTER FONT --------------------</p>
      <p className={inter.className}>{text} inter.className </p>
      <p className={`${inter.variable} font-inter`}>{text}-inter.variable</p>
      <p className="font-inter">{text}-font-inter</p>
      <p style={{ fontFamily: inter.style.fontFamily }}>{text}-style: inter.style.fontFamily</p>
      <h6 className="font-roboto_mono">{text}</h6>
      <h6 className="font-roboto-mono">{text}</h6>
    </div>
  );
}
