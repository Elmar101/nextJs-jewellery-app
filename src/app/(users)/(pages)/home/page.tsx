import Image from 'next/image';
import UserForm from './UserForm';
import UserList from './UserList';

const HomePage = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex justify-between">
        <div className="basis-2/3 mr-3">
          <Image src="/assets/images/img1.jpg" alt="komp" width={1000} height={1600} />
        </div>
        <UserForm />
      </div>
      <div>
        <UserList />
      </div>
    </div>
  );
};

export default HomePage;
