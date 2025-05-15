import Image from 'next/image';

const HomePage = () => {
  return (
    <div>
      <img src="/assets/images/img1.jpg" alt="komp" />
      <Image src="/assets/images/img1.jpg" alt="komp" width={1200} height={500} />
    </div>
  );
};

export default HomePage;
